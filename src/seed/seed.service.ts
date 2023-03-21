import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarBrands } from '../car-brands/entities/car-brand.entity';
import { Category } from '../categories/entities/category.entity';
import { ProductBrands } from '../product-brands/entities/product-brand.entity';
import { initialData } from './data/seed-data';
import { Providers } from '../providers/entities/provider.entity';
import { InternalServerErrorException } from '@nestjs/common/exceptions';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
    @InjectModel(CarBrands.name)
    private readonly carBrandsModel: Model<CarBrands>,
    @InjectModel(ProductBrands.name)
    private readonly productBrandsModel: Model<ProductBrands>,
    @InjectModel(Providers.name)
    private readonly providersModel: Model<Providers>,
  ) {}

  async executeSeed() {
    const categories = initialData.categories;
    const carBrands = initialData.carBrands;
    const productBrands = initialData.productBrands;
    const providers = initialData.providers;

    try {
      await Promise.all([
        this.categoryModel.deleteMany(),
        this.carBrandsModel.deleteMany(),
        this.productBrandsModel.deleteMany(),
        this.providersModel.deleteMany(),
      ]);
  
      await Promise.all([
        this.categoryModel.insertMany(categories),
        this.carBrandsModel.insertMany(carBrands),
        this.productBrandsModel.insertMany(productBrands),
        this.providersModel.insertMany(providers),
      ]);
  
      return {
        message: `seed Executed`,
        init: [
          { name: `categories`, length: categories.length },
          { name: `carBrands`, length: carBrands.length },
          { name: `productBrands`, length: productBrands.length },
          { name: `providers`, length: providers.length },
        ],
      };   
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        `Can't executar seeds - Check server logs`,
      );
    }

  }
}
