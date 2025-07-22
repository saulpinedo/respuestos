import { Injectable } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from '@prisma/client';

@Injectable()
export class RoleService {
    constructor(private readonly roleRepository: RoleRepository) { }

    async create(data: CreateRoleDto): Promise<Role> {
        return this.roleRepository.create(data);
    }

    async findAll(): Promise<Role[]> {
        return this.roleRepository.findAll();
    }

    async findById(id: number): Promise<Role | null> {
        return this.roleRepository.findById(id);
    }

    async update(id: number, data: UpdateRoleDto): Promise<Role> {
        return this.roleRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        return this.roleRepository.delete(id);
    }
}
