import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { addProductDto } from '../Dto/create-Product-dto';
import { ProductService } from '../service/product.service';
import { fileInterceptor } from '../utils/file-upload.utils';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @UseInterceptors(fileInterceptor)
  async createProduct(@Body() record: addProductDto, @UploadedFile() file) {
    return this.productService.AddProduct(record, file);
  }
  @Get('viewAll')
  getProduct(): any {
    return this.productService.findAllProduct();
  }
  @Delete('delete/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
  @Patch('update/:id')
  @UseInterceptors(fileInterceptor)
  update(@Param('id') id: number, @Body() data: any, @UploadedFile() file) {
    return this.productService.updateProduct(id, data, file);
  }
}
