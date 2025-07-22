import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Model } from '@prisma/client';

@Injectable()
export class ModelRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { nombre: string, brand_id?: number }): Promise<Model> {
        return this.prisma.model.create({ data });
    }

    async findAll(): Promise<Model[]> {
        return this.prisma.model.findMany();
    }

    async findById(id: number): Promise<Model | null> {
        return this.prisma.model.findUnique({ where: { id } });
    }

    async update(id: number, data: { nombre?: string, brand_id?: number }): Promise<Model> {
        return this.prisma.model.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.model.delete({ where: { id } });
    }
} 