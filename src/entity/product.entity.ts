import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ timestamps: true, underscored: true })
export class Product extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  productName: string;

  @Column
  productPrice: number;

  @Column
  productImage: string;
}
