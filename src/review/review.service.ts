import { Injectable, Inject } from '@nestjs/common';
import { UUID } from 'sequelize';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @Inject('REVIEW_REPOSITORY')
    private readonly reviewRepository: typeof Review,
  ) {}

  async create(review: CreateReviewDto): Promise<Review> {
    return await this.reviewRepository.create<Review>(review);
  }

  async delete(id: string): Promise<number> {
    return await this.reviewRepository.destroy({ where: { id } });
  }

  async deleteByProductId(productId: string) {
    return await this.reviewRepository.destroy({ where: { productId } });
  }

  async findByProductId(productId: string) {
    return await this.reviewRepository.findAll({
      where: { productId },
    });
  }
}
