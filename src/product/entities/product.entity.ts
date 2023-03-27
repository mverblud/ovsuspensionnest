import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Category } from '../../categories/entities/category.entity';
import { ProductBrands } from '../../product-brands/entities/product-brand.entity';
import { Providers } from '../../providers/entities/provider.entity';
import { CarBrands } from '../../car-brands/entities/car-brand.entity';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Product extends Document {
  @Prop({
    type: String,
    index: true,
    trim: true,
    uppercase: true,
  })
  code: string;
  @Prop({
    type: String,
    index: true,
    trim: true,
    uppercase: true,
  })
  name: string;
  @Prop({
    type: String,
    trim: true,
  })
  description: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Category.name
  })
  category: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: ProductBrands.name
  })
  productBrand: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Providers.name
  })
  provider: string;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: CarBrands.name
  })
  carBrand: string;
  @Prop({
    default: 0,
  })
  stock: number;
  @Prop({
    default: 0,
  })
  price:number;
  @Prop({
    default: 0,
  })
  iva:number
  @Prop({
    default: 0,
  })
  priceIva:number;
  @Prop({
    default: 0,
  })
  discount:number;
  @Prop({
    default: 0,
  })
  priceFinal:number;
  @Prop({
    default: true,
  })
  state: boolean;
  @Prop({
    default: true,
  })
  enabled: boolean;
}

export const ProductsSchema = SchemaFactory.createForClass(Product);
