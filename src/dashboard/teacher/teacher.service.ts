import { User } from '@auth/entities/user.entity/user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entities';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateTeacherDto) {
    const user = await this.userRepository.findOne({
      where: { id: dto.userID },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }
    const teacher = await this.teacherRepository.find({
      where: {
        id: dto.userID,
      },
    });

    if (teacher.length > 0) {
      throw new BadRequestException('Teacher already exists');
    }

    const newTeacher = this.teacherRepository.create({
      user,
      description: dto.description,
    });
    return await this.teacherRepository.save(newTeacher);
  }

  async findAll() {
    return this.teacherRepository.find();
  }

  async findOne(id: string) {
    const teacher = await this.teacherRepository
      .createQueryBuilder('teacher')
      .leftJoin('teacher.user', 'user')
      .select(['teacher.id', 'teacher.name', 'user.name', 'user.family'])
      .where('teacher.id = :id', { id: id })
      .getOne();

    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }
    return teacher;
  }

  async edit(id: string, dto: UpdateTeacherDto) {
    const teacher = await this.teacherRepository.findOne({
      where: { id },
    });
    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }
    Object.assign(teacher, dto);
    return await this.teacherRepository.save(teacher);
  }

  async delete(id: string) {
    const teacher = await this.teacherRepository.findOne({
      where: { id },
    });
    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }
    return await this.teacherRepository.remove(teacher);
  }
}
