import { User } from './User.entity';
// import { USER_REPOSITORY } from '../../core/constants';

export const authProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
