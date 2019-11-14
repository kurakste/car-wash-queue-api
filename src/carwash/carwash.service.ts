import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Carwash as CarwashInterface } from './interfaces/carwash.interface';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashEntity } from './carwash.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarwashService {
  constructor(
    @InjectRepository(CarwashEntity)
    private carwashRepository: Repository<CarwashEntity>
  ) { }


  async findAll() {
    return await this.carwashRepository.find();
  }

  async findOne(id: string) {
    return await this.carwashRepository.findOne({ where: { id } });
  }

  async addNew(
    data: CreateCarwashDto
  ): Promise<{ result: string, carwash: CarwashInterface }> {
    const carwash = await this.carwashRepository.create(data);
    await this.carwashRepository.save(carwash);
    return { result: 'Done.', carwash: carwash };
  }

  async patchCarwash(
    id: string,
    name: string,
    desc: string,
    lat: number,
    lng: number
  ) {
    const data = {};
    if (name) data['name'] = name;
    if (desc) data['desc'] = desc;
    if (lat) data['lat'] = lat;
    if (lng) data['lng'] = lng;
    await this.carwashRepository.update({ id }, data);
    return await this.carwashRepository.findOne({ id });
  }

  delete(id: string): null {
    return null;
  }
}
