import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarwashEntity } from './carwash.entity';
import { CarwashController } from './carwash.controller';
import { CarwashService } from './carwash.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarwashEntity])],
  providers: [ CarwashService ],
  controllers: [ CarwashController ],
})
export class CarwashModule {};