import { Review } from './review.entity';

export const reviewProviders = [
  {
    provide: 'REVIEW_REPOSITORY',
    useValue: Review,
  },
];
