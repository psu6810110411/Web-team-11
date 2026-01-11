import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 1. ต้อง import อันนี้
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking } from './entities/booking.entity'; // 2. import Entity
import { Tour } from '../tours/entities/tour.entity'; // 3. import Tour (ระวัง path ให้ถูกนะครับ ใช้ ../tours)

@Module({
  // 4. หัวใจสำคัญคือบรรทัดนี้ครับ! ต้องใส่ TypeOrmModule.forFeature
  imports: [TypeOrmModule.forFeature([Booking, Tour])], 
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}