import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarBrandDto } from './dto/create-car-brand.dto';
import { UpdateCarBrandDto } from './dto/update-car-brand.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CarBrands } from './entities/car-brand.entity';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CarBrandsService {
  constructor(
    @InjectModel(CarBrands.name)
    private readonly carBrandModel: Model<CarBrands>,
  ) {}

  async create(createCarBrandDto: CreateCarBrandDto) {
    try {
      const carBrand = await this.carBrandModel.create(createCarBrandDto);
      return { carBrand };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginatioDto: PaginationDto) {
    const { limit = 25, offset = 0 } = paginatioDto;
    const query = { state: true };

    const [count, carBrands] = await Promise.all([
      this.carBrandModel.countDocuments(query),
      this.carBrandModel
        .find(query)
        .skip(offset)
        .limit(limit)
        .sort({ name: 1 })
        .select('-__v'),
    ]);

    return {
      count,
      offset,
      limit,
      carBrands,
    };
  }

  async findOne(term: string) {
    let carBrand: CarBrands;
    // MongoID
    if (isValidObjectId(term)) {
      carBrand = await this.carBrandModel.findById({ _id: term });
    }
    // Name
    if (!carBrand) {
      carBrand = await this.carBrandModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }
    if (!carBrand)
      throw new NotFoundException(
        `Car Brand whith id or name "${term}" not found`,
      );
    return { carBrand };
  }

  async update(id: string, updateCarBrandDto: UpdateCarBrandDto) {
    const carBrand = await this.carBrandModel.findByIdAndUpdate(
      id,
      updateCarBrandDto,
      {
        new: true,
      },
    );
    if (!carBrand)
      throw new NotFoundException(`Car Brand whith id "${id}" not found`);
    return { carBrand };
  }

  async remove(id: string) {
    const carBrand:CarBrands = await this.carBrandModel.findByIdAndUpdate(id, {
      state: false,
    });
    if (carBrand.state === false)
      throw new NotFoundException(`Car Brand whith id "${id}" not found`);
    return { message: `Car Brand id "${id}" deleted` };
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Car Brand exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Car Brand - Check server logs`,
    );
  }
}
