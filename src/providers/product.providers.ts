import { Product } from '../entity/product.entity';
export const ProductProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
