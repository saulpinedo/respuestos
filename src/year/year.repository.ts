import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Year } from '@prisma/client';

@Injectable()
export class YearRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { valor: number, model_id?: number }): Promise<Year> {
        return this.prisma.year.create({ data });
    }

    async findAll(): Promise<Year[]> {
        return this.prisma.year.findMany();
    }

    async findById(id: number): Promise<Year | null> {
        return this.prisma.year.findUnique({ where: { id } });
    }

    async update(id: number, data: { valor?: number, model_id?: number }): Promise<Year> {
        return this.prisma.year.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.year.delete({ where: { id } });
    }
} 