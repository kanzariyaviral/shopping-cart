import { Cart } from '../entity/cart.entity';
export const CartProviders = [
  {
    provide: 'CART_REPOSITORY',
    useValue: Cart,
  },
];
