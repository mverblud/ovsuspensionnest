import { Module } from '@nestjs/common';
import { ProductBrandsService } from './product-brands.service';
import { ProductBrandsController } from './product-brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductBrands, ProductBrandsSchema } from './entities/product-brand.entity';

@Module({
  controllers: [ProductBrandsController],
  providers: [ProductBrandsService],
  imports: [
    MongooseModule.forFeature([
      { name: ProductBrands.name, schema: ProductBrandsSchema },
    ]),
  ],
  exports:[MongooseModule]
})
export class ProductBrandsModule {}
