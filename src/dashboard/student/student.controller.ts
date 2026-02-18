import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('register')
  @ApiOperation({ summary: 'Register a new Student' })
  register(@Body() dto: CreateStudentDto) {
    console.log(dto);
    return this.studentService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiOperation({ summary: 'Update an existing Student' })
  update(@Param('id') id: string, @Body() dto: CreateStudentDto) {
    return this.studentService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete an existing Student' })
  delete(@Param('id') id: string) {
    return this.studentService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  @ApiOperation({ summary: 'Get all Students' })
  findAll() {
    return this.studentService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a Student by ID' })
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }
}
