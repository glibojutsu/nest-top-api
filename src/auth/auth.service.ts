import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, getSalt, hash } from 'bcryptjs';
import { isEmail } from 'class-validator';
import { AuthDto } from './dto/auth.dto';
import { User } from './User.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDto) {
    if (await this.findUser(dto.email)) {
      throw new BadRequestException('email already exists');
    }
    const salt = await genSalt(10);
    const newUser = {
      email: dto.email,
      passwordHash: await hash(dto.password, salt),
    };
    return await this.userRepository.create(newUser);
  }

  async findUser(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async validateUser({ email, password }: AuthDto) {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException('email not found');
    }

    const isCorrectPassword = await compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw new UnauthorizedException('wrong password');
    }
    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
