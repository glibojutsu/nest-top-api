import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/auth/User.entity';
import { Product } from 'src/product/product.entity';
import { Review } from 'src/review/review.entity';
import { TopPage } from 'src/top-page/top-page.entity';
// import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case 'DEVELOPMENT':
          config = databaseConfig.development;
          break;
        case 'TEST':
          config = databaseConfig.test;
          break;
        case 'PRODUCTION':
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Product, Review, TopPage]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
