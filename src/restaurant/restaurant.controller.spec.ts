import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurants') // The name of the table in the database
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column('float') // Specifies that this column will store a floating-point number
  rating: number;
}
