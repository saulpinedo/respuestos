import { Role } from '@prisma/client';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

export interface IRoleRepository {
    create(data: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findById(id: number): Promise<Role | null>;
    update(id: number, data: UpdateRoleDto): Promise<Role>;
    delete(id: number): Promise<void>;
} 