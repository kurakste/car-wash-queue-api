import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashService } from './carwash.service';
import { Carwash } from './interfaces/carwash.interface'; 

@Controller('carwash')
export class CarwashController {
  constructor(private readonly carwashService: CarwashService) {}

  @Get()
  findAll(): Carwash[] {
    return this.carwashService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateCarwashDto): string {
    return `create new carwash with name ${createItemDto.name} and
    desc: ${createItemDto.desc}.`;
  }

  @Get(':id')
  findOne(@Param('id') id): Carwash {
    return this.carwashService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete id: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateCarwashDto): string {
    console.log('------>', updateItemDto)
    return `update carwash id: ${id}, name: ${updateItemDto.name}, desc: ${updateItemDto.desc}`;
  }

}