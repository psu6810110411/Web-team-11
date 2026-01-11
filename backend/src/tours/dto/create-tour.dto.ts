import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTourDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  destination: string;
}