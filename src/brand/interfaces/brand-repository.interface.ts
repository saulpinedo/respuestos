import { Brand } from '@prisma/client';
import { CreateBrandDto } from '../dto/create-brand.dto';
import { UpdateBrandDto } from '../dto/update-brand.dto';

export interface IBrandRepository {
    create(data: CreateBrandDto): Promise<Brand>;
    findAll(): Promise<Brand[]>;
    findById(id: number): Promise<Brand | null>;
    update(id: number, data: UpdateBrandDto): Promise<Brand>;
    delete(id: number): Promise<void>;
} 