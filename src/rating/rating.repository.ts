import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Rating } from '@prisma/client';

@Injectable()
export class RatingRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: any): Promise<Rating> {
        return this.prisma.rating.create({ data });
    }

    async findAll(): Promise<Rating[]> {
        return this.prisma.rating.findMany();
    }

    async findById(id: number): Promise<Rating | null> {
        return this.prisma.rating.findUnique({ where: { id } });
    }

    async update(id: number, data: any): Promise<Rating> {
        return this.prisma.rating.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.rating.delete({ where: { id } });
    }
} 