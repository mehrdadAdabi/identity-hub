import { User } from '@auth/entities/user.entity/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entities';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, User])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
