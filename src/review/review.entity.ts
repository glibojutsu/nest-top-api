import sequelize from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Sequelize } from 'sequelize/dist';
import { DataTypes } from 'sequelize/types';

@Table
export class Review extends Model<Review> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({})
  name: string;

  @Column({})
  title: string;

  @Column({})
  description: string;

  @Column({})
  rating: number;

  @Column({})
  productId: string;
}
