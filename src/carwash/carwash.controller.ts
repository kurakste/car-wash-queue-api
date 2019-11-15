import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashService } from './carwash.service';
import { Carwash } from './interfaces/carwash.interface';

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
    try {
      await this.carwashService.delete(id);
      return `Delete id: ${id}`;
    } catch (err) {
      return `Error: ${err.message}`;
    }
  }

  @Patch(':id')
  update(
    @Param('id') id,
    @Body('name') name: string,
    @Body('desc') desc: string,
    @Body('lat') lat: number,
    @Body('lng') lng: number,
  ): string {
    try {
      this.carwashService.patchCarwash(id, name, desc, lat, lng);
      return `update carwash id: ${id}`;
    } catch (err) {
      return `error: ${err.message}`
    }
  }

}
