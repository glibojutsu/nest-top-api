import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { reviewProviders } from './review.providers';
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, ...reviewProviders],
  exports: [ReviewService],
})
export class ReviewModule {}
