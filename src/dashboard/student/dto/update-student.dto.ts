import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  studentCode?: string;

  @IsOptional()
  @IsNumber()
  grade?: number;
}
