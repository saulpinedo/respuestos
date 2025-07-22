import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Post()
    async create(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.create(createRoleDto);
    }

    @Get()
    async findAll() {
        return this.roleService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.roleService.findById(Number(id));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
        return this.roleService.update(Number(id), updateRoleDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.roleService.delete(Number(id));
        return { message: 'Usuario eliminado correctamente' };
    }
}
