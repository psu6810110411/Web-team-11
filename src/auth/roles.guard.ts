import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  // รับค่า roles ที่อนุญาตเข้ามา (เช่น ['admin'])
  constructor(private requiredRole: string) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // ดึง User ที่ Login อยู่

    // ถ้าไม่มี User หรือ Role ไม่ตรงกับที่ต้องการ -> ห้ามเข้า!
    if (!user || user.role !== this.requiredRole) {
      throw new UnauthorizedException('คุณไม่มีสิทธิ์ทำรายการนี้ (สำหรับ Admin เท่านั้น)');
    }

    return true; // ผ่านได้
  }
}