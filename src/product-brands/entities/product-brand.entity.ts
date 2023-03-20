import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class ProductBrands extends Document {
  @Prop({
    unique: true,
    index: true,
    trim: true,
    uppercase: true,
  })
  name: string;
  @Prop({
    default: true,
  })
  state: boolean;
  @Prop({
    default: true,
  })
  enabled: boolean;
}

export const ProductBrandsSchema = SchemaFactory.createForClass(ProductBrands);
