import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true }) // Username ห้ามซ้ำกัน
  username: string;

  @Column()
  password: string; // เราจะเก็บรหัสผ่านที่ถูกเข้ารหัสแล้ว (Hashed)

  @Column({ default: 'user' }) // default เป็น 'user' ธรรมดา (ถ้าแอดมินค่อยแก้เป็น 'admin')
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}