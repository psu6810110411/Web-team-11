import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // 1. import เข้ามา

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. เปิดใช้งาน Validation ทั่วทั้งโปรเจกต์
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // ตัด field แปลกปลอมที่ไม่ได้นิยามใน DTO ออกอัตโนมัติ
  }));

  // เปิด CORS (เผื่ออนาคตเอา Frontend มาต่อจะได้ไม่ติด)
  app.enableCors();

  await app.listen(3000);
}
bootstrap();