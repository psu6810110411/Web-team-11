import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // สมัครสมาชิก (เข้ารหัส Password ก่อนบันทึก)
  async signUp(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    
    // 1. สร้าง Salt และ Hash รหัสผ่าน
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // 2. ส่งไปให้ UsersService บันทึกลง DB
    return this.usersService.create({
      username,
      password: hashedPassword, // บันทึกตัวที่ Hash แล้วเท่านั้น!
    });
  }

  // เข้าสู่ระบบ (ตรวจสอบรหัสผ่าน และออก Token)
  async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const { username, password } = createUserDto;
    
    // 1. ค้นหา User จากชื่อ
    const user = await this.usersService.findOneByUsername(username);

    // 2. ถ้าเจอ User และ รหัสผ่านถูกต้อง (เปรียบเทียบรหัสที่ส่งมา กับที่ Hash เก็บไว้)
    if (user && (await bcrypt.compare(password, user.password))) {
      
      // 3. สร้าง Payload (ข้อมูลที่จะใส่ใน Token)
      const payload = { username: user.username, sub: user.id, role: user.role };
      
      // 4. เซ็นชื่อกำกับและส่ง Token กลับไป
      const accessToken = await this.jwtService.signAsync(payload);
      return { accessToken };
    }

    // ถ้าผิด ให้แจ้ง Error
    throw new UnauthorizedException('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }
}