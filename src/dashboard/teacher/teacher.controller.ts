import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @UseGuards(JwtAuthGuard)
  @Post('register')
  @ApiOperation({ summary: 'Register a new Teacher' })
  register(@Body() dto: CreateTeacherDto) {
    return this.teacherService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiOperation({ summary: 'Update an existing Teacher' })
  update(@Param('id') id: string, @Body() dto: UpdateTeacherDto) {
    return this.teacherService.edit(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  @ApiOperation({ summary: 'Get all Teacher' })
  findAll() {
    return this.teacherService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a Student by ID' })
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(id);
  }
}
