import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Photo } from '@prisma/client';

@Injectable()
export class PhotoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { data: Buffer, mime_type: string, item_id?: number }): Promise<Photo> {
        return this.prisma.photo.create({ data });
    }

    async findAll(): Promise<Photo[]> {
        return this.prisma.photo.findMany();
    }

    async findById(id: number): Promise<Photo | null> {
        return this.prisma.photo.findUnique({ where: { id } });
    }

    async update(id: number, data: { data?: Buffer, mime_type?: string, item_id?: number }): Promise<Photo> {
        return this.prisma.photo.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.photo.delete({ where: { id } });
    }
} 