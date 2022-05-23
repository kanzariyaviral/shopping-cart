import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../entity/product.entity';
@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: typeof Product,
  ) {}

  async AddProduct(record: any, file: any): Promise<any> {
    const productImage = 'uploads/' + file.filename;
    const response = {
      productName: record.productName,
      productPrice: record.productPrice,
      productImage: productImage,
    };
    await this.productRepository.create<Product>(response);
    return 'Product Added Successfully...';
  }
  async findAllProduct(): Promise<any> {
    const data = await this.productRepository.findAll<Product>();
    return data;
  }

  async findByID(id: number): Promise<Product[]> {
    const data: any = await this.productRepository.findOne<Product>({
      where: { id: id },
    });
    return data;
  }

  async deleteProduct(id: number): Promise<any> {
    const data = await this.findByID(id);
    if (data) {
      await this.productRepository.destroy<Product>({
        where: { id: id },
      });
      return 'Product deleted successfully';
    } else {
      return 'Product not exist';
    }
  }

  async updateProduct(id: number, data: any, file: any): Promise<any> {
    const foundItem = await this.findByID(id);
    const productImage = 'uploads/' + file.filename;
    if (foundItem) {
      await this.productRepository.update<Product>(
        {
          productName: data.productName,
          productPrice: data.productPrice,
          productImage: productImage,
        },
        {
          where: { id: id },
        },
      );
      return 'product Updated Successfullys';
    } else {
      return 'Product Is Not Available';
    }
  }
}
