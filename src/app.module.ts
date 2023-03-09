import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/configuration';
import { JoiValidationSchema } from './config/joi.validation';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    CategoriesModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
