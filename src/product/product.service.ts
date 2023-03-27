import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model, isValidObjectId } from 'mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.productModel.create(createProductDto);
      return { product };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginatioDto: PaginationDto) {
    const { limit = 25, offset = 0 } = paginatioDto;
    const query = { state: true };

    const [count, products] = await Promise.all([
      this.productModel.countDocuments(query),
      this.productModel
        .find(query)
        .skip(offset)
        .limit(limit)
        .sort({ name: 1 })
        .populate('category', 'name')
        .populate('provider', 'name')
        //  .populate('carbrand', 'name')
        //  .populate('productbrand', 'name')
        .select('-__v'),
    ]);

    return {
      count,
      offset,
      limit,
      products,
    };
  }

  async findOne(term: string) {
    let product: Product;
    // MongoID
    if (isValidObjectId(term)) {
      product = await this.productModel
        .findById({ _id: term })
        .populate('category', 'name')
        .populate('provider', 'name')
        .select('-__v')
    }
    // Name
    if (!product) {
      product = await this.productModel
        .findOne({
          name: term.toLowerCase().trim(),
        })
        .populate('category', 'name')
        .populate('provider', 'name')
        .select('-__v')
    }
    if (!product)
      throw new NotFoundException(
        `Product whith id or name "${term}" not found`,
      );
    return { product };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      {
        new: true,
      },
    );
    if (!product)
      throw new NotFoundException(`Product whith id "${id}" not found`);
    return { product };
  }

  async remove(id: string) {
    const product: Product = await this.productModel.findByIdAndUpdate(id, {
      state: false,
    });
    if (product.state === false)
      throw new NotFoundException(`Product whith id "${id}" not found`);
    return { message: `Product id "${id}" deleted` };
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Product exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Product - Check server logs`,
    );
  }
}
