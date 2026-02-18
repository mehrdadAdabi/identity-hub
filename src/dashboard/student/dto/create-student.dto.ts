import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  userID!: string;

  @IsString()
  @ApiProperty({ example: 'STU12345' })
  studentCode!: string;

  @IsNumber()
  @ApiProperty({ example: 10 })
  grade!: number;
}
