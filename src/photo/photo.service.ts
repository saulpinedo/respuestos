import { Inject, Injectable } from '@nestjs/common';
import { IPhotoRepository } from './interfaces/photo-repository.interface';
import { Photo } from 'generated/prisma/wasm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotoService implements IPhotoRepository {
    constructor(
        @Inject('PhotoRepositoryInterface')
        private readonly photoRepository: IPhotoRepository
    ) { }
    create(data: CreatePhotoDto): Promise<Photo> {
        return this.photoRepository.create(data);
    }
    findAll(): Promise<Photo[]> {
        return this.photoRepository.findAll();
    }
    findById(id: number): Promise<Photo | null> {
        return this.photoRepository.findById(id);
    }
    update(id: number, data: UpdatePhotoDto): Promise<Photo> {
        return this.photoRepository.update(id, data);
    }
    delete(id: number): Promise<void> {
        return this.photoRepository.delete(id);
    }
}
