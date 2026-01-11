import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // 1. Import มา

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. ตั้งค่า Swagger (โชว์ชื่อ API และเวอร์ชัน)
  const config = new DocumentBuilder()
    .setTitle('Tour Booking API')
    .setDescription('API สำหรับจองทัวร์ท่องเที่ยวสุดเฟี้ยว')
    .setVersion('1.0')
    .addBearerAuth() // ทีเด็ด! เพิ่มปุ่มให้ใส่ Token (รูปกุญแจ)
    .build();

  // 3. สร้างเอกสาร
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // เข้าผ่าน /api

  await app.listen(3000);
}
bootstrap();