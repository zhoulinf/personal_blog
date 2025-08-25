import {Controller, Delete, Get, Param} from '@nestjs/common';
import {RoleService} from './role.service';
import {Public} from '@src/common/decorator/public-decorator';
import {ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';


@ApiTags('role')
@Controller('role')
export class RoleController {

  constructor(private roleService: RoleService) { }


  @Get(':roleId')
  @ApiOperation({summary: '获取角色详情（包含权限）'})
  @ApiParam({
    name: 'roleId',
    required: true,
    description: '角色唯一标识ID',
    type: Number,
  })
  async getRoleDetail(@Param('roleId') roleId: number) {
    return this.roleService.findRoleWithPermissions(roleId);
  }

  @Public()
  @Get()
  @ApiOperation({summary: '获取所有角色'})
  async getAllRoles() {
    return this.roleService.findAllRoles();
  }


  @Delete(':roleId')
  @ApiOperation({summary: '删除角色'})
  @ApiParam({
    name: 'roleId',
    required: true,
    description: '角色唯一标识ID',
    type: Number,
  })
  async deleteRole(@Param('roleId') roleId: number) {
    return this.roleService.removeRoleById(roleId);
  }


}