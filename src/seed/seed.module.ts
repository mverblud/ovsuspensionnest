import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CategoriesModule } from '../categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarBrandsModule } from '../car-brands/car-brands.module';
import { ProductBrandsModule } from '../product-brands/product-brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
    CategoriesModule,
    CarBrandsModule,
    ProductBrandsModule,
    MongooseModule
  ]
})
export class SeedModule {}
