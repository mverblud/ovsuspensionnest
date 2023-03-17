import { Module } from '@nestjs/common';
import { CarBrandsService } from './car-brands.service';
import { CarBrandsController } from './car-brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarBrands, CarBrandsSchema } from './entities/car-brand.entity';

@Module({
  controllers: [CarBrandsController],
  providers: [CarBrandsService],
  imports: [
    MongooseModule.forFeature([
      { name: CarBrands.name, schema: CarBrandsSchema },
    ]),
  ],
  exports:[MongooseModule]
})
export class CarBrandsModule {}
