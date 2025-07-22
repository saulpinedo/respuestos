import { Photo } from '@prisma/client';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { UpdatePhotoDto } from '../dto/update-photo.dto';

export interface IPhotoRepository {
    create(data: CreatePhotoDto): Promise<Photo>;
    findAll(): Promise<Photo[]>;
    findById(id: number): Promise<Photo | null>;
    update(id: number, data: UpdatePhotoDto): Promise<Photo>;
    delete(id: number): Promise<void>;
} 