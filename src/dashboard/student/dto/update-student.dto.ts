import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  studentCode?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 10 })
  grade?: number;
}
