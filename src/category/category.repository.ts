import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { nombre: string }): Promise<Category> {
        return this.prisma.category.create({ data });
    }

    async findAll(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }

    async findById(id: number): Promise<Category | null> {
        return this.prisma.category.findUnique({ where: { id } });
    }

    async update(id: number, data: { nombre?: string }): Promise<Category> {
        return this.prisma.category.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.category.delete({ where: { id } });
    }
} 