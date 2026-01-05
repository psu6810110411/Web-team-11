import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToursModule } from './tours/tours.module';
import { BookingsModule } from './bookings/bookings.module';

// 1. Import Entity เข้ามาตรงๆ เลย
import { Tour } from './tours/entities/tour.entity';
import { Booking } from './bookings/entities/booking.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5555'),
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || 'password123',
      database: process.env.DB_NAME || 'tour_db',
      
      // 2. ใส่บรรทัดนี้ครับ! เพื่อบังคับโหลด Entity ทั้งคู่
      entities: [Tour, Booking],
      
      autoLoadEntities: true, 
      synchronize: true,
    }),

    ToursModule,
    BookingsModule,
  ],
})
export class AppModule {}