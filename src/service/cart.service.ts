import { Inject, Injectable } from '@nestjs/common';
import { Cart } from 'src/entity/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @Inject('CART_REPOSITORY')
    private readonly cartRepository: typeof Cart,
  ) {}
  async createCart(id: any): Promise<any> {
    await this.cartRepository.create<Cart>(id);
    return 'create cart successfull';
  }
  async getAll(): Promise<any> {
    return this.cartRepository.findAll();
  }
}
