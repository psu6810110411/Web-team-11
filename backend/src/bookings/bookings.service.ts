import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
// แก้บรรทัดนี้: ใช้ ../ แค่อันเดียวพอครับ
import { Tour } from '../tours/entities/tour.entity'; 
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
    @InjectRepository(Tour)
    private toursRepository: Repository<Tour>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    // ถ้า DTO ยังแดงอยู่ เดี๋ยวไปแก้ไฟล์ DTO ในข้อ 2 ครับ
    const { tourId, travelers, ...customerData } = createBookingDto;
    
    const tour = await this.toursRepository.findOneBy({ id: tourId });
    if (!tour) throw new NotFoundException(`Tour not found`);

    const totalPrice = tour.price * travelers;

    const booking = this.bookingsRepository.create({
      ...customerData,
      travelers,
      totalPrice,
      tour,
    });

    return this.bookingsRepository.save(booking);
  }

  findAll() {
    return this.bookingsRepository.find({ relations: ['tour'] });
  }

  findOne(id: string) {
    return this.bookingsRepository.findOne({ 
      where: { id }, 
      relations: ['tour'] 
    });
  }
}