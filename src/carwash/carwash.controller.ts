import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashService } from './carwash.service';
import { Carwash } from './interfaces/carwash.interface';

@Controller('carwash')
export class CarwashController {
  constructor(private readonly carwashService: CarwashService) { }

  @Get()
  findAll(): Carwash[] {
    return this.carwashService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateCarwashDto): string {
    this.carwashService.addNew(createItemDto);
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

  @Patch(':id')
  update(
    @Param('id') id,
    @Body('name') name: string,
    @Body('desc') desc: string,
    @Body('lat') lat: number,
    @Body('lng') lng: number,
  ): string {
    this.carwashService.patchCarwash(id, name, desc, lat, lng);
    return `update carwash id: ${id}`;
  }

}
