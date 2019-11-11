import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarwashController } from './carwash/carwash.controller';
import { CarwashService } from './carwash/carwash.service';
import { CarwashModule } from './carwash/carwash.module';

@Module({
  imports: [ TypeOrmModule.forRoot(), CarwashModule],
  controllers: [AppController, CarwashController],
  providers: [AppService, CarwashService],
})
export class AppModule {}
