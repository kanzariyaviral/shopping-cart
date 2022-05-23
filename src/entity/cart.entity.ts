import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ timestamps: true, underscored: true })
export class Cart extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  Quantity: number;
}
