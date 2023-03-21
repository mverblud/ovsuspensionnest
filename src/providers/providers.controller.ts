import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ParseMongoIdPipe } from '../common/pipes/parse-mongo-id.pipe';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Get()
  findAll(@Query() paginatioDto: PaginationDto) {
    return this.providersService.findAll(paginatioDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.providersService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id',ParseMongoIdPipe) id: string, @Body() updateProviderDto: UpdateProviderDto) {
    return this.providersService.update(id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseMongoIdPipe) id: string) {
    return this.providersService.remove(id);
  }
}
