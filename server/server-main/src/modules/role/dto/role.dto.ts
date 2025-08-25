

import { PermissionDto } from "./permission.dto";
export class RoleDto {
  roleId: number
  roleName: string;
  roleDesc: string;
  createAt: Date
  permissions: PermissionDto[]
}