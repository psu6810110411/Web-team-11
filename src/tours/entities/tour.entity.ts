import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tour {
  @PrimaryGeneratedColumn('uuid') // ใช้ ID แบบสุ่มตัวอักษรยาวๆ (UUID)
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 }) // เก็บเงินทศนิยม 2 ตำแหน่ง
  price: number;

  @Column()
  destination: string;

  @Column({ default: true })
  isAvailable: boolean;
}