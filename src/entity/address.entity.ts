import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';
@Table({ timestamps: true })
export class Address extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  house_number: string;

  @Column
  street: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  zipCode: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
