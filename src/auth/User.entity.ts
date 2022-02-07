// import sequelize from 'sequelize';
import sequelize from 'sequelize';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  passwordHash: string;

  // @Column({
  //   type: DataType.DATE,
  //   allowNull: false,
  // })
  // createdAt = sequelize.DATE;

  // @Column({
  //   type: DataType.DATE,
  //   allowNull: false,
  // })
  // updatedAt = sequelize.DATE;
}

// import { Table, Column, Model, DataType } from 'sequelize-typescript';

// @Table
// export class User extends Model<User> {
//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     name: string;

//     @Column({
//         type: DataType.STRING,
//         unique: true,
//         allowNull: false,
//     })
//     email: string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     password: string;

//     @Column({
//         type: DataType.ENUM,
//         values: ['male', 'female'],
//         allowNull: false,
//     })
//     gender: string;
// }
