import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';

@Injectable()
export class ToursService {
  constructor(
    @InjectRepository(Tour)
    private toursRepository: Repository<Tour>,
  ) {}

  create(createTourDto: CreateTourDto) {
    const newTour = this.toursRepository.create(createTourDto);
    return this.toursRepository.save(newTour);
  }

  findAll() {
    return this.toursRepository.find();
  }

  findOne(id: string) {
    return this.toursRepository.findOneBy({ id });
  }

  // update และ remove ไว้ก่อนก็ได้ครับ หรือจะใส่ว่างๆ ไว้ก่อน
  update(id: number, updateTourDto: UpdateTourDto) {
    return `This action updates a #${id} tour`;
  }

  remove(id: number) {
    return `This action removes a #${id} tour`;
  }
}