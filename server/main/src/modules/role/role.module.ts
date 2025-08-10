import { Module } from "@nestjs/common";
import { RoleRepository } from "./repository/role.repository";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "./entities/role.entity";
import { Permission } from "./entities/permission.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  providers: [RoleRepository, RoleService],
  controllers: [RoleController]
})
export class RoleModule { }