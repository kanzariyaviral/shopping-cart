import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Cart } from './cart.entity';
import { Product } from './product.entity';
@Table({ timestamps: true, underscored: true })
export class Cart_Product extends Model {
  @ForeignKey(() => Cart)
  @Column
  cartId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column
  Quantity: number;

  @Column
  total_price: number;
}
