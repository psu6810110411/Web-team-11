import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common'; // 1. เพิ่ม Request, UseGuards
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from '@nestjs/passport'; // 2. เพิ่ม AuthGuard

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  // 🔒 3. ล็อกห้องจอง! ต้องมี Token เท่านั้น
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() createBookingDto: CreateBookingDto) {
    // 4. ทีเด็ดอยู่ตรงนี้! ดึงชื่อจาก Token มาใส่แทนชื่อที่กรอกมา
    // req.user มาจาก JwtStrategy ที่เราเขียนไว้ครับ
    console.log('User ที่กำลังจองคือ:', req.user); 
    
    createBookingDto.customerName = req.user.username; 
    
    return this.bookingsService.create(createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }
}