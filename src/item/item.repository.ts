import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Item } from '@prisma/client';

@Injectable()
export class ItemRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: any): Promise<Item> {
        return this.prisma.item.create({ data });
    }

    async findAll(): Promise<Item[]> {
        return this.prisma.item.findMany();
    }

    async findById(id: number): Promise<Item | null> {
        return this.prisma.item.findUnique({ where: { id } });
    }

    async update(id: number, data: any): Promise<Item> {
        return this.prisma.item.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.item.delete({ where: { id } });
    }
} 