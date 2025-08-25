import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";


@Entity("t_permission")
export class Permission {
  @PrimaryGeneratedColumn()
  perm_id: number;

  @Column()
  perm_name: string;

  @Column()
  perm_code: string;

  @Column()
  perm_desc: string;

  @ManyToMany(() => Role)
  roles: Role[];
}