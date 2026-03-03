import { UserRole } from '@auth/types/auth.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.STUDENT })
  role!: UserRole;

  @Column({ nullable: true, unique: true, default: null })
  nationalCode?: string;

  @Column()
  phoneNumber!: string;

  @Column()
  name!: string;

  @Column()
  family!: string;

  @Column({ nullable: true })
  avatarUrl?: string;

  @Column()
  birthDate?: Date;

  @Column()
  createdAt!: Date;
}
