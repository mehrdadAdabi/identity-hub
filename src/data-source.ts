import dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './auth/entities/user.entity/user.entity';
import { Student } from './dashboard/student/entities/student.entities';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Student],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: false,
});
