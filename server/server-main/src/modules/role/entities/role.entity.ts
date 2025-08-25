import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Permission} from './permission.entity';

@Entity('t_role')
export class Role {

  @PrimaryGeneratedColumn()
  role_id: number;

  @Column()
  role_name: string;

  @Column()
  role_desc: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  create_at: Date;

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable({
    name: 't_role_permission',
    joinColumn: {name: '123', referencedColumnName: 'role_id'},
    inverseJoinColumn: {name: 'perm_id', referencedColumnName: 'perm_id'},
  })
  permissions: Permission[];

}