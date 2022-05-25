import { Module } from '@nestjs/common';
import { cartController } from '../controller/cart.controller';
import { CartService } from '../service/cart.service';
import { CartProviders } from '../providers/cart.provider';

@Module({
  controllers: [cartController],
  providers: [CartService, ...CartProviders],
  exports: [CartService],
})
export class CartModule {}
