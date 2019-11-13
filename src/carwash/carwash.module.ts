import { Module } from '@nestjs/common';
import { CarwashController } from './carwash.controller';
import { CarwashService } from './carwash.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarwashEntity } from './carwash.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarwashEntity])],
  providers: [ CarwashService ],
  controllers: [ CarwashController ],
  exports: [CarwashService]
})
export class CarwashModule {};