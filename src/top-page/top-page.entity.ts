import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ENUM } from 'sequelize/types';

export class HhData {
  @Column({})
  count: number;

  @Column({})
  juniorSalary: number;

  @Column({})
  middleSalary: number;

  @Column({})
  seniorSalary: number;
}

@Table
export class TopPage extends Model<TopPage> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.ENUM('COURSES', 'SERVICES', 'BOOKS', 'PRODUCTS'),
  })
  firstCategory: TopLevelCategory;

  @Column({})
  secondCategory: string;

  @Column({})
  title: string;

  @Column({})
  category: string;

  @Column({
    type: DataType.JSON,
  })
  hh?: HhData;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  advantages: Advantage[];

  @Column({})
  seoText: string;

  @Column({})
  tagsTitle: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  tags: string[];
}

export enum TopLevelCategory {
  Courses = 'COURSES',
  Services = 'SERVICES',
  Books = 'BOOKS',
  Products = 'PRODUCTS',
}

export class Advantage {
  title: string;
  description: string;
}
