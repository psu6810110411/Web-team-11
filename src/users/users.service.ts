import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // สร้าง User object (เดี๋ยวเราค่อยไป Hash password ใน AuthService)
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  // ฟังก์ชันนี้สำคัญมาก! ใช้ตอน Login เพื่อหาว่ามี User นี้ในระบบไหม
  async findOneByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  // ใช้หา User จาก ID (เช่นตอนดู Profile ตัวเอง)
  async findOne(id: string) {
    return this.usersRepository.findOneBy({ id });
  }
}