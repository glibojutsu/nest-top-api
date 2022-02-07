import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: typeof Product,
  ) {}

  async create(dto: CreateProductDto) {
    return await this.productRepository.create(dto);
  }

  async findById(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    } else {
      return product;
    }
  }

  async deleteById(id: string) {
    const deletedProduct = await this.productRepository.findOne({
      where: { id },
    });
    if (!deletedProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    } else {
      this.productRepository.destroy({ where: { id } });
    }
  }

  async updateById(id: string, dto: CreateProductDto) {
    const [updated] = await this.productRepository.update(dto, {
      where: { id },
    });
    if (updated === 0) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    } else {
      const updatedProduct = await this.findById(id);
      return updatedProduct;
    }
  }

  // async findWithReviews(dto: FindProductDto) {
  //   return this.productRepository.findAll({
  //     where: { categories: dto.category },
  //     limit: dto.limit,
  //   });
  // }
}
