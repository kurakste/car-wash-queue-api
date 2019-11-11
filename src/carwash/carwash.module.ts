import { Module } from '@nestjs/common';
import { CarwashController } from './carwash.controller';
import { CarwashService } from './carwash.service';

@Module({
  imports: [],
  providers: [ CarwashService ],
  controllers: [ CarwashController ],
})
export class CarwashModule {};