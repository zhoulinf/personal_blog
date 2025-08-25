import {Inject, Injectable, LoggerService} from '@nestjs/common';
import {Repository} from 'typeorm';
import {LOGGER_TOKEN} from '@src/logger/logger.module';
import {InjectRepository} from '@nestjs/typeorm';
import {Role} from './entities/role.entity';
import {RoleRepository} from './repository/role.repository';

@Injectable()
export class RoleService {

  constructor(
    private readonly roleDatabaseRepository: RoleRepository,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    @Inject(LOGGER_TOKEN) private readonly logger: LoggerService,
  ) { }


  async findRoleWithPermissions(roleId: number) {
    const permissions = await this.roleRepository.findOne({
      where: {role_id: roleId},
      relations: ['permissions'],
    });
    return permissions;
  }

  async removeRoleById(roleId: number) {
    return this.roleDatabaseRepository.deleteRoleById(roleId);
  }

  async findAllRoles() {
    return this.roleRepository.find();
  }
}