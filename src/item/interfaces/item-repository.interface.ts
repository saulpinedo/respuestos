import { Item } from '@prisma/client';
import { CreateItemDto } from '../dto/create-item.dto';
import { UpdateItemDto } from '../dto/update-item.dto';

export interface IItemRepository {
    create(data: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findById(id: number): Promise<Item | null>;
    update(id: number, data: UpdateItemDto): Promise<Item>;
    delete(id: number): Promise<void>;
} 