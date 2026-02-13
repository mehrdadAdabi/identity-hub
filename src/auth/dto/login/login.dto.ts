import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({ example: '09225674189' })
  phoneNumber!: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'password123' })
  password!: string;
}
