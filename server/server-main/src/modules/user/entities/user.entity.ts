import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  mobile: string;

  @Column({
    default: 0
  })
  status: number;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
