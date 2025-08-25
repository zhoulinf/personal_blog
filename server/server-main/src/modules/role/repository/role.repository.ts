import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Permission } from "../entities/permission.entity";
import { Role } from "../entities/role.entity";
import { RolePermission } from "../entities/role-permission.entity";



@Injectable()
export class RoleRepository {
  constructor(private readonly dataSource: DataSource) { }


  /* 
  
    SELECT rp.perm_id,p.perm_name
    from t_role r 
    JOIN t_role_permission rp on r.role_id = rp.role_id
    JOIN t_permission p on rp.perm_id = p.perm_id
    WHERE r.role_id = 1;
  */
  async findPermissionsByRoleId(roleId: number): Promise<Permission[]> {
    return this.dataSource
      .getRepository(Permission)
      .createQueryBuilder('p')
      .innerJoin('t_role_permission', 'rp', 'p.perm_id = rp.perm_id')
      .innerJoin('t_role', 'r', 'rp.role_id = r.role_id')
      .select(['rp.perm_id AS perm_id', 'p.perm_name AS perm_name'])
      .where('r.role_id = :roleId', { roleId })
      .getRawMany();
  }


  async deleteRoleById(roleId: number) {
    return this.dataSource.transaction(async (manager) => {
      await manager
        .createQueryBuilder()
        .delete()
        .from(RolePermission)
        .where('role_id=:role_id', { role_id: roleId })
        .execute()

      await manager
        .createQueryBuilder()
        .delete()
        .from(Role)
        .where("role_id=:role_id", { role_id: roleId })
        .execute()
    })
  }
}