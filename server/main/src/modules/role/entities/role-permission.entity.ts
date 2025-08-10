import { Entity, PrimaryColumn } from "typeorm";


@Entity('t_role_permission')
export class RolePermission {
  @PrimaryColumn()
  role_id: number;

  @PrimaryColumn()
  perm_id: number;
}