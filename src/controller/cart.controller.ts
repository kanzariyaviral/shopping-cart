import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartService } from '../service/cart.service';

@Controller('cart')
export class cartController {
  constructor(private cartService: CartService) {}
  @Post()
  async createCart(@Body() user: any) {
    const { id } = user;
    await this.cartService.createCart(id);
  }
  @Get('all')
  async getAll() {
    await this.cartService.getAll();
  }
}
