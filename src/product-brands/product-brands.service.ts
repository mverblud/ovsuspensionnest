import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
import { ProductBrands } from './entities/product-brand.entity';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProductBrandsService {
  constructor(
    @InjectModel(ProductBrands.name)
    private readonly ProductBrandsModel: Model<ProductBrands>,
  ) {}

  async create(createProductBrandDto: CreateProductBrandDto) {
    try {
      const productBrand = await this.ProductBrandsModel.create(
        createProductBrandDto,
      );
      return { productBrand };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginatioDto: PaginationDto) {
    const { limit = 25, offset = 0 } = paginatioDto;
    const query = { state: true };

    const [count, productBrands] = await Promise.all([
      this.ProductBrandsModel.countDocuments(query),
      this.ProductBrandsModel.find(query)
        .skip(offset)
        .limit(limit)
        .sort({ name: 1 })
        .select('-__v'),
    ]);

    return {
      count,
      offset,
      limit,
      productBrands,
    };
  }

  async findOne(term: string) {
    let productBrand: ProductBrands;
    // MongoID
    if (isValidObjectId(term)) {
      productBrand = await this.ProductBrandsModel.findById({ _id: term }).select('-__v');
    }
    // Name
    if (!productBrand) {
      productBrand = await this.ProductBrandsModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }
    if (!productBrand)
      throw new NotFoundException(
        `Product Brand whith id or name "${term}" not found`,
      );
    return { productBrand };
  }

  async update(id: string, updateProductBrandDto: UpdateProductBrandDto) {
    const productBrand = await this.ProductBrandsModel.findByIdAndUpdate(
      id,
      updateProductBrandDto,
      {
        new: true,
      },
    );
    if (!productBrand)
      throw new NotFoundException(`Product Brand whith id "${id}" not found`);
    return { productBrand };
  }

  async remove(id: string) {
    const productBrand :ProductBrands = await this.ProductBrandsModel.findByIdAndUpdate(id, {
      state: false,
    });
    if (productBrand.state === false)
      throw new NotFoundException(`Product Brand whith id "${id}" not found`);
    return { message: `Product Brand id "${id}" deleted` };
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Product Brand exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Product Brand - Check server logs`,
    );
  }
}
