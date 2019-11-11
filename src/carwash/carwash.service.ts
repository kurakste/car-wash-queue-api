import { Injectable } from '@nestjs/common';
import { Carwash } from './interfaces/carwash.interface';

@Injectable()
export class CarwashService {
  private readonly carwash: Carwash[] = [
    {
      id: 'new',
      name: 'new carwash',
      desc: 'Brand new car wash',
      lat: 12.345,
      lng: 13.345
    },
    {
      id: 'new1',
      name: 'new carwash 1',
      desc: 'Brand new car wash 1',
      lat: 12.345,
      lng: 13.345
    }
  ]

  findAll(): Carwash[] {
    return this.carwash;
  }

  findOne(id: string): Carwash {
    return this.carwash.find(carwash => carwash.id === id);
  }

}
