import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: 'student' })
  role!: string;

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
