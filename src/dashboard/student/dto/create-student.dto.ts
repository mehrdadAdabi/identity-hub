import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  userID!: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isActive!: boolean;
}
