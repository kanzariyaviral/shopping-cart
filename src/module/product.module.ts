import { Module } from '@nestjs/common';
import { ProductController } from '../controller/product.controller';
import { ProductService } from '../service/product.service';
import { ProductProviders } from '../providers/product.providers';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, ...ProductProviders],
  exports: [ProductService],
})
export class ProductModule {}
