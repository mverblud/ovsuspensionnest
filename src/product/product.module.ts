import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductsSchema } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductsSchema },
    ]),
  ],
  exports:[MongooseModule]
})
export class ProductModule {}
