import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesService } from '../categories/categories.service';
import { initialData } from './data/seed-categories';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
  ){}

  async executeSeed() {

    const categories = initialData.categories;

    await this.categoryModel.deleteMany();
    await this.categoryModel.insertMany(categories);

    return `seed Executed`;
  }

}
