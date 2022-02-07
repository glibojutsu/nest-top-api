import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return await this.authService.createUser(authDto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() authDto: AuthDto) {
    const { email } = await this.authService.validateUser(authDto);
    return this.authService.login(email);
  }

  @Get('find/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.authService.findUser(email);
  }
}
