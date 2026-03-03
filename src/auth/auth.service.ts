import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login/login.dto';
import { RegisterDto } from './dto/register/register.dto';
import { User } from './entities/user.entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const exist = await this.userRepository.findOne({
      where: { email: dto.email, phoneNumber: dto.phoneNumber },
    });

    if (exist) {
      throw new BadRequestException(
        'User with this email or phone number already exists',
      );
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = this.userRepository.create({
      email: dto.email,
      password: hashedPassword,
      phoneNumber: dto.phoneNumber,
      role: dto.role,
      name: dto.name,
      family: dto.family,
      birthDate: dto.birthDate,
      createdAt: new Date(),
    });
    await this.userRepository.save(user);
  }

  async getUsers() {
    return this.userRepository.find();
  }

  async login(dto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { phoneNumber: dto.phoneNumber },
    });

    if (!user) {
      throw new BadRequestException('Invalid phone number or password');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid phone number or password');
    }

    const payload = {
      sub: user.id,
      phoneNumber: user.phoneNumber,
      name: user.name,
      family: user.family,
    };
    const token = await this.jwtService.signAsync(payload);
    return { accessToken: token };
  }
}
