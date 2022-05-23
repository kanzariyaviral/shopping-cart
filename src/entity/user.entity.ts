import {
  AutoIncrement,
  Column,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { Address } from './address.entity';
@Table({ timestamps: true })
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Unique
  @Column
  email: string;

  @Column
  gender: string;

  @Column
  password: string;

  @Default(false)
  @Column
  activeToken: boolean;

  @Column
  verfication_token: number;

  @HasMany(() => Address)
  address: Address[];
}
