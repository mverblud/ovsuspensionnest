import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Providers } from './entities/provider.entity';
import { Model, isValidObjectId } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProvidersService {

  constructor(
    @InjectModel(Providers.name)
    private readonly ProvidersModel: Model<Providers>,
  ) {}

  async create(createProviderDto: CreateProviderDto) {
    try {
      const provider = await this.ProvidersModel.create(
        createProviderDto,
      );
      return { provider };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginatioDto: PaginationDto) {
    const { limit = 25, offset = 0 } = paginatioDto;
    const query = { state: true };

    const [count, providers] = await Promise.all([
      this.ProvidersModel.countDocuments(query),
      this.ProvidersModel.find(query)
        .skip(offset)
        .limit(limit)
        .sort({ name: 1 })
        .select('-__v'),
    ]);

    return {
      count,
      offset,
      limit,
      providers,
    };
  }

  async findOne(term: string) {
    let provider: Providers;
    // MongoID
    if (isValidObjectId(term)) {
      provider = await this.ProvidersModel.findById({ _id: term });
    }
    // Name
    if (!provider) {
      provider = await this.ProvidersModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }
    if (!provider)
      throw new NotFoundException(
        `Provider whith id or name "${term}" not found`,
      );
    return {provider };
  }

  async update(id: string, updateProviderDto: UpdateProviderDto) {
    const provider = await this.ProvidersModel.findByIdAndUpdate(
      id,
      updateProviderDto,
      {
        new: true,
      },
    );
    if (!provider)
      throw new NotFoundException(`Provider whith id "${id}" not found`);
    return { provider };
  }

  async remove(id: string) {
    const provider :Providers = await this.ProvidersModel.findByIdAndUpdate(id, {
      state: false,
    });
    if (provider.state === false)
      throw new NotFoundException(`Product Brand whith id "${id}" not found`);
    return { message: `Product Brand id "${id}" deleted` };
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Provider exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException(
      `Can't create Provider - Check server logs`,
    );
  }

}
