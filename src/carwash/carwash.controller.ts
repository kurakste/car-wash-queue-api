import { Controller, Get, Post, Body, Param, Delete, Patch, UseFilters, UsePipes } from '@nestjs/common';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashService } from './carwash.service';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('carwash')
export class CarwashController {
  constructor(private readonly carwashService: CarwashService) { }

  @Get()
  findAll() {
    return this.carwashService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
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
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() data: Partial<CreateCarwashDto>) {
    const carwash = await this.carwashService.patchCarwash(id, data);
    return carwash;
  }
}

