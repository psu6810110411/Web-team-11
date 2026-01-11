import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // วิธีดึง Token: ดึงมาจาก Header ที่ชื่อ Authorization: Bearer ...
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // ⚠️ สำคัญ: ต้องตรงกับ Secret ที่เราตั้งไว้ใน AuthModule
      secretOrKey: 'SECRET_KEY_NA_KRUB', 
    });
  }

  async validate(payload: any) {
    // เมื่อ Token ถูกต้อง ข้อมูลในนี้จะถูกแปะไปกับ req.user
    return { userId: payload.sub, username: payload.username, role: payload.role };
  }
}