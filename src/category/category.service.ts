import { Injectable } from '@nestjs/common';
import { Category } from 'generated/prisma/client';
import { ICategoryRepository } from './interfaces/category-repository.interface';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService implements ICategoryRepository {
    create(data: CreateCategoryDto): Promise<Category> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<Category[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: number): Promise<Category | null> {
        throw new Error('Method not implemented.');
    }
    update(id: number, data: UpdateCategoryDto): Promise<Category> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}