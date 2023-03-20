import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarBrands } from '../car-brands/entities/car-brand.entity';
import { Category } from '../categories/entities/category.entity';
import { initialDataCategories } from './data/seed-categories';
import { initialDataCarBrands } from './data/seed-carBrands';
import { ProductBrands } from '../product-brands/entities/product-brand.entity';
import { initialDataProductBrands } from './data/seed-productBrands';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
    @InjectModel(CarBrands.name)
    private readonly carBrandsModel: Model<CarBrands>,
    @InjectModel(ProductBrands.name)
    private readonly productBrandsModel: Model<ProductBrands>,
  ) {}

  async executeSeed() {
    const categories = initialDataCategories.categories;
    const carBrands = initialDataCarBrands.carBrands;
    const productBrands = initialDataProductBrands.productBrands;

    await Promise.all([
      this.categoryModel.deleteMany(),
      this.carBrandsModel.deleteMany(),
      this.productBrandsModel.deleteMany(),
    ])

    await Promise.all([
      this.categoryModel.insertMany(categories),
      this.carBrandsModel.insertMany(carBrands),
      this.productBrandsModel.insertMany(productBrands)
    ])

    return {
      message:`seed Executed`,
      init : [`categories`,`carBrands`,"productBrands"]
    };
  }
}
