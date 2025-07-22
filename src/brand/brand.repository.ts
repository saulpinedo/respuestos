import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Brand } from '@prisma/client';

@Injectable()
export class BrandRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { nombre: string, category_id?: number }): Promise<Brand> {
        return this.prisma.brand.create({ data });
    }

    async findAll(): Promise<Brand[]> {
        return this.prisma.brand.findMany();
    }

    async findById(id: number): Promise<Brand | null> {
        return this.prisma.brand.findUnique({ where: { id } });
    }

    async update(id: number, data: { nombre?: string, category_id?: number }): Promise<Brand> {
        return this.prisma.brand.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.brand.delete({ where: { id } });
    }
} 