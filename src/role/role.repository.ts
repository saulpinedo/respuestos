import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class RoleRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { nombre: string }): Promise<Role> {
        return this.prisma.role.create({ data });
    }

    async findAll(): Promise<Role[]> {
        return this.prisma.role.findMany();
    }

    async findById(id: number): Promise<Role | null> {
        return this.prisma.role.findUnique({ where: { id } });
    }

    async update(id: number, data: { nombre?: string }): Promise<Role> {
        return this.prisma.role.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.role.delete({ where: { id } });
    }
} 