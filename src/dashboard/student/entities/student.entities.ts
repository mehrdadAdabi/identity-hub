import { User } from '@auth/entities/user.entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;

  @Column()
  year!: string;
  // @Column()
  // studentCode!: string;

  @Column({ nullable: true })
  grade!: number;
}
