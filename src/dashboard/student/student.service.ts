import { User } from '@auth/entities/user.entity/user.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entities';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateStudentDto) {
    const user = await this.userRepository.findOne({
      where: { id: dto.userID },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const student = await this.studentRepository.find({
      where: {
        id: dto.userID,
      },
    });

    if (student.length > 0) {
      throw new BadRequestException('Student already exists');
    }

    const newStudent = this.studentRepository.create({
      user,
      isActive: dto.isActive,
    });

    return await this.studentRepository.save(newStudent);
  }

  findAll() {
    return this.studentRepository.find({ relations: ['user'] });
  }

  async findOne(id: string) {
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  async update(id: string, dto: Partial<CreateStudentDto>) {
    const update = await this.studentRepository.update(id, dto);

    if (update.affected === 0) {
      throw new NotFoundException('Student not found');
    }

    return this.findOne(id);
  }

  async remove(id: string) {
    const student = await this.studentRepository.findOne({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return await this.studentRepository.remove(student);
  }
}
