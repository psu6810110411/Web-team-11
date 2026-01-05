import { IsString, IsNotEmpty, IsUUID, IsInt, Min, IsEmail } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  @IsNotEmpty()
  tourId: string; // <-- ต้องมีบรรทัดนี้ Service ถึงจะหายแดง

  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsEmail()
  @IsNotEmpty()
  customerEmail: string;

  @IsInt()
  @Min(1)
  travelers: number;
}