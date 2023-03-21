import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Providers extends Document {
  @Prop({
    unique: true,
    index: true,
    trim: true,
    uppercase: true,
  })
  name: string;
  @Prop({
    trim: true,
    uppercase: true,
  })
  shortName: string;
  @Prop({
    trim: true,
    lowercase: true,
  })
  address: string;
  @Prop({
    trim: true,
    lowercase: true,
  })
  phone:string;
  @Prop({
    trim: true,
    lowercase: true,
  })
  email:string;
  @Prop({
    default: true,
  })
  state: boolean;
}

export const ProvidersSchema = SchemaFactory.createForClass(Providers);
