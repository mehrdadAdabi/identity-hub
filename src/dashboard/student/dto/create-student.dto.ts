import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @IsUUID()
  userID!: string;

  @IsString()
  studentCode!: string;

  @IsNumber()
  grade!: number;
}
