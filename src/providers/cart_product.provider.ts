import { Cart_Product } from '../entity/cart-product.entity';
export const CartProductProviders = [
  {
    provide: 'CART_PRODUCT_REPOSITORY',
    useValue: Cart_Product,
  },
];
