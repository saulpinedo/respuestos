import { Inject, Injectable } from '@nestjs/common';
import { IRatingRepository } from './interfaces/rating-repository.interface';
import { Rating } from 'generated/prisma/wasm';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService implements IRatingRepository {
    constructor(
        @Inject('RatingRepositoryInterface')
        private readonly ratingRepository: IRatingRepository
    ) { }
    create(data: CreateRatingDto): Promise<Rating> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<Rating[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: number): Promise<Rating | null> {
        throw new Error('Method not implemented.');
    }
    update(id: number, data: UpdateRatingDto): Promise<Rating> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
