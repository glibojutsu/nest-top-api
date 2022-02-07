import sequelize from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({})
  image: string;

  @Column({})
  title: string;

  @Column({})
  price: number;

  @Column({})
  oldPrice?: number;

  @Column({})
  credit: number;

  @Column({})
  calculatedRating: number;

  @Column({})
  description: string;

  @Column({})
  advantages: string;

  @Column({})
  disadvantages: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  categories: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  tags: string[];

  @Column({
    type: DataType.ARRAY(DataType.JSON),
  })
  characteristics: ProductCharasteristic[];
}

class ProductCharasteristic {
  @Column({})
  name: string;

  @Column({})
  value: string;
}
