 import { IsString, IsNumber } from 'class-validator';

 export class CreateCarwashDto {
   @IsString()
   readonly name: string;
   @IsString()
   readonly desc: string;
   @IsNumber()
   readonly lat: number;
   @IsNumber()
   readonly lng: number;
 }