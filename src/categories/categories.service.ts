import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoryModel.create(createCategoryDto);
      return { category };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginatioDto: PaginationDto) {
    const { limit = 25, offset = 0 } = paginatioDto;
    const query = { state: true };

    const [total, categories] = await Promise.all([
      this.categoryModel.countDocuments(query),
      this.categoryModel
        .find(query)
        .skip(offset)
        .limit(limit)
        .sort({ name: 1 })
        .select('-__v'),
    ]);

    return {
      total,
      offset,
      limit,
      categories,
    };
  }

  async findOne(term: string) {
    let category: Category;
    // MongoID
    if (isValidObjectId(term)) {
      category = await this.categoryModel.findById({ _id: term });
    }
    // Name
    if (!category) {
      category = await this.categoryModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }
    if (!category)
      throw new NotFoundException(
        `Category whith id or name "${term}" not found`,
      );
    return { category };
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.findByIdAndUpdate(
      id,
      updateCategoryDto,
      {
        new: true,
      },
    );
    if (!category)
      throw new NotFoundException(`Category whith id "${id}" not found`);
    return { category };
  }

  async remove(id: string) {
    const category = await this.categoryModel.findByIdAndUpdate(id, {
      status: false,
    });
    if (!category)
      throw new NotFoundException(`Category whith id "${id}" not found`);
    return { message: `Category id "${id}" deleted` };
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Category exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Category - Check server logs`,
    );
  }
}
