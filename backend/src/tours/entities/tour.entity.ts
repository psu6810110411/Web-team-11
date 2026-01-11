import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from '../../bookings/entities/booking.entity'; // <-- 1. อย่าลืม import

@Entity()
export class Tour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  destination: string;

  @Column({ default: true })
  isAvailable: boolean;

  // 2. เพิ่มส่วนนี้ครับ
  @OneToMany(() => Booking, (booking) => booking.tour)
  bookings: Booking[];
}