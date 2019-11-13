import { Injectable, NotFoundException } from '@nestjs/common';
import { Carwash } from './interfaces/carwash.interface';
import { CreateCarwashDto } from './dto/create-carwash.dto'

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
  
  private findCarwash(id: string): [number, Carwash] {
    const indx = this.carwash.findIndex(el=>el.id===id);
    const carwash = this.carwash[indx];
    if (!carwash) throw new NotFoundException('Product not found');
    return [indx, carwash];
  }

  private deleteCarwash(id: string): null {
    const indx = this.carwash.findIndex(el=>el.id===id);
    const carwash = this.carwash[indx];
    if (!carwash) throw new NotFoundException('Product not found');
    this.carwash.splice(indx, 1);
    return null;
  }

  findAll(): Carwash[] {
    return this.carwash;
  }

  findOne(id: string): Carwash {
    const carwash = this.carwash.find(carwash => carwash.id === id);
    if (!carwash) throw new NotFoundException('Product not found');
    return { ...carwash };
  }

  addNew(carwash: CreateCarwashDto): { result: string } {
    this.carwash.push(carwash);
    return { result: 'Done.' };
  }

  patchCarwash(
    id: string,
    name: string,
    desc: string,
    lat: number,
    lng: number
  ): null {
    const carwash = this.carwash.find(carwash => carwash.id === id);
    if (name) carwash.name = name;
    if (desc) carwash.desc = desc;
    if (lng) carwash.lng = lng;
    if (lat) carwash.lat = lat;
    return null;
  }

  delete(id: string): null {
    this.deleteCarwash(id);
    return null;
  }
}
