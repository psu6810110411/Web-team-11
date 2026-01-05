import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToursModule } from './tours/tours.module';

@Module({
  imports: [
    // 1. โหลดค่าจากไฟล์ .env
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. ตั้งค่าเชื่อมต่อ Database
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5555'), // ใช้ 5555 ตามที่เราตั้งใน Docker
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || 'password123',
      database: process.env.DB_NAME || 'tour_db',
      autoLoadEntities: true, // โหลด Entity อัตโนมัติ
      synchronize: true,      // สร้าง Table ใน DB ให้เอง (เหมาะกับ Dev)
    }),

    ToursModule,
  ],
})
export class AppModule {}