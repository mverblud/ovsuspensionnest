import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductBrandsService } from './product-brands.service';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ParseMongoIdPipe } from '../common/pipes/parse-mongo-id.pipe';

@Controller('product-brands')
export class ProductBrandsController {
  constructor(private readonly productBrandsService: ProductBrandsService) {}

  @Post()
  create(@Body() createProductBrandDto: CreateProductBrandDto) {
    return this.productBrandsService.create(createProductBrandDto);
  }

  @Get()
  findAll(@Query() paginatioDto: PaginationDto) {
    return this.productBrandsService.findAll(paginatioDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.productBrandsService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateProductBrandDto: UpdateProductBrandDto,
  ) {
    return this.productBrandsService.update(id, updateProductBrandDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseMongoIdPipe) id: string) {
    return this.productBrandsService.remove(id);
  }
}
