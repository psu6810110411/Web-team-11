import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST: http://localhost:3000/auth/register
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  // POST: http://localhost:3000/auth/login
  @HttpCode(HttpStatus.OK) // ปกติ Post จะได้ 201 แต่ Login ควรเป็น 200 OK
  @Post('login')
  signIn(@Body() createUserDto: CreateUserDto) {
    return this.authService.signIn(createUserDto);
  }
}