import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class CarwashEntity {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @CreateDateColumn() created : Date;

  @Column('text') 
  name: string;

  @Column('text') 
  desc: string;
  
  @Column('numeric') 
  lat: number;

  @Column('numeric') 
  lng: number;

}