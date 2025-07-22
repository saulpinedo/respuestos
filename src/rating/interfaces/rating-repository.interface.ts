import { Rating } from '@prisma/client';
import { CreateRatingDto } from '../dto/create-rating.dto';
import { UpdateRatingDto } from '../dto/update-rating.dto';

export interface IRatingRepository {
    create(data: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<Rating[]>;
    findById(id: number): Promise<Rating | null>;
    update(id: number, data: UpdateRatingDto): Promise<Rating>;
    delete(id: number): Promise<void>;
} 