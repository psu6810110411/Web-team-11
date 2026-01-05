import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- เพิ่ม
import { ToursService } from './tours.service';
import { ToursController } from './tours.controller';
import { Tour } from './entities/tour.entity'; // <-- เพิ่ม

@Module({
  imports: [TypeOrmModule.forFeature([Tour])], // <-- สำคัญมาก! ต้องใส่ตรงนี้
  controllers: [ToursController],
  providers: [ToursService],
})
export class ToursModule {}