import { Year } from '@prisma/client';
import { CreateYearDto } from '../dto/create-year.dto';
import { UpdateYearDto } from '../dto/update-year.dto';

export interface IYearRepository {
    create(data: CreateYearDto): Promise<Year>;
    findAll(): Promise<Year[]>;
    findById(id: number): Promise<Year | null>;
    update(id: number, data: UpdateYearDto): Promise<Year>;
    delete(id: number): Promise<void>;
} 