import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Tour } from '../../tours/entities/tour.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerName: string;

  @Column()
  customerEmail: string;

  @Column('int')
  travelers: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ default: 'PENDING' })
  status: string;

  @CreateDateColumn()
  bookingDate: Date;

  @ManyToOne(() => Tour, (tour) => tour.bookings)
  tour: Tour;
}