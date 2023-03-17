import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarBrands } from 'src/car-brands/entities/car-brand.entity';
import { Category } from 'src/categories/entities/category.entity';
import { initialDataCategories } from './data/seed-categories';
import { initialDataCarBrands } from './data/seed-carBrands';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
    @InjectModel(CarBrands.name)
    private readonly carBrandsModel: Model<CarBrands>,
  ) {}

  async executeSeed() {
    const categories = initialDataCategories.categories;
    const carBrands = initialDataCarBrands.carBrands;

    await Promise.all([
      this.categoryModel.deleteMany(),
      this.carBrandsModel.deleteMany(),
    ])

    await Promise.all([
      this.categoryModel.insertMany(categories),
      this.carBrandsModel.insertMany(carBrands)
    ])

    return {
      message:`seed Executed`,
      init : [`categories`,`carBrands`]
    };
  }
}
