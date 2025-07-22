import { Category } from '@prisma/client';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

export interface ICategoryRepository {
    create(data: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category | null>;
    update(id: number, data: UpdateCategoryDto): Promise<Category>;
    delete(id: number): Promise<void>;
} 