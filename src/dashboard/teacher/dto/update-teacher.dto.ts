import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTeacherDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'معلم با سابقه' })
  description!: string;
}
