import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Carwash as CarwashInterface } from './interfaces/carwash.interface';
import { CreateCarwashDto } from './dto/create-carwash.dto';
import { CarwashEntity } from './carwash.entity';

@Injectable()
export class CarwashService {
  constructor(
    @InjectRepository(CarwashEntity)
    private readonly carwashRepository: Repository<CarwashEntity>
  ) { }


  async findAll() {
    return await this.carwashRepository.find();
  }

  async findOne(id: string) {
    const carwash = await this.carwashRepository.findOne({ where: { id } });
    if (!carwash) throw new HttpException('Not found.', HttpStatus.NOT_FOUND);
    return carwash;
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
    const carwash = await this.carwashRepository.findOne({where: {id} });
    
    console.log('===================================>', carwash);
    if (!carwash) throw new HttpException('Not found.', HttpStatus.NOT_FOUND);
    await this.carwashRepository.update({ id }, data);
    return await this.carwashRepository.findOne({ id });
  }

  async delete(id: string): Promise<string> {
    const carwash = await this.carwashRepository.findOne({
      where: { id },
    });
    if (!carwash) throw new HttpException('Not found!', HttpStatus.NOT_FOUND);
    await this.carwashRepository.remove(carwash);
    return 'done';
  }
}
