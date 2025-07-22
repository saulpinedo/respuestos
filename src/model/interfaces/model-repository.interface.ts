import { Model } from '@prisma/client';
import { CreateModelDto } from '../dto/create-model.dto';
import { UpdateModelDto } from '../dto/update-model.dto';

export interface IModelRepository {
    create(data: CreateModelDto): Promise<Model>;
    findAll(): Promise<Model[]>;
    findById(id: number): Promise<Model | null>;
    update(id: number, data: UpdateModelDto): Promise<Model>;
    delete(id: number): Promise<void>;
} 