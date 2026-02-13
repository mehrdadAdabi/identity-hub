import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @ApiProperty({ example: 'mehrdad@example.com' })
  email!: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({ example: 'StrongPassword123!' })
  password!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '09123456789' })
  phoneNumber!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Mehrdad' })
  name!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Ahmadi' })
  family!: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ example: '1990-01-01' })
  birthDate?: string;
}
