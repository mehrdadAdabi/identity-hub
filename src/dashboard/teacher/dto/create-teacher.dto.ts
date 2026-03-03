import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateTeacherDto {
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  userID!: string;

  @IsString()
  @ApiProperty({ example: 'معلم با سابقه' })
  description!: string;
}
