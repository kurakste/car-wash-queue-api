import { Controller, Get, Post, Body, Param, Delete, Patch, UseFilters } from '@nestjs/common';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashService } from './carwash.service';
import { Carwash } from './interfaces/carwash.interface';
import { HttpErrorFilter } from 'src/shared/http-error.filter';

@Controller('carwash')
export class CarwashController {
  constructor(private readonly carwashService: CarwashService) { }

  @Get()
  findAll() {
    return this.carwashService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateCarwashDto) {
    this.carwashService.addNew(createItemDto)
    return `create new carwash with name ${createItemDto.name} and
    desc: ${createItemDto.desc}.`;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.carwashService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    await this.carwashService.delete(id);
    return { operation: 'delete', status: 'done' };
  }

  @Patch(':id')
  async update(
    @Param('id') id,
    @Body('name') name: string,
    @Body('desc') desc: string,
    @Body('lat') lat: number,
    @Body('lng') lng: number,
  ) {
    const carwash = await this.carwashService.patchCarwash(id, name, desc, lat, lng);
    return carwash;
  }
}

