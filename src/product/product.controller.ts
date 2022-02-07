import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() productDto: CreateProductDto) {
    return await this.productService.create(productDto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.productService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.productService.deleteById(id);
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() productDto: CreateProductDto) {
    return await this.productService.updateById(id, productDto);
  }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  // @Post('find')
  // async find(@Body() dto: FindProductDto) {
  //   return await this.productService.findWithReviews(dto);
  // }
}
