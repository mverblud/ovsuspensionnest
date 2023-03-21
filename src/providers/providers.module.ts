import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Providers, ProvidersSchema } from './entities/provider.entity';

@Module({
  controllers: [ProvidersController],
  providers: [ProvidersService],
  imports: [
    MongooseModule.forFeature([
      { name: Providers.name, schema: ProvidersSchema },
    ]),
  ],
  exports:[MongooseModule]
})
export class ProvidersModule {}
