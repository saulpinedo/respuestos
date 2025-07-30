import { Inject, Injectable } from '@nestjs/common';
import { IModelRepository } from './interfaces/model-repository.interface';
import { Model } from 'generated/prisma/wasm';
import { UpdateModelDto } from './dto/update-model.dto';
import { CreateModelDto } from './dto/create-model.dto';

@Injectable()
export class ModelService implements IModelRepository {
    constructor(
        @Inject('ModelRepositoryInterface')
        private readonly modelRepository: IModelRepository
    ) { }
    create(data: CreateModelDto): Promise<Model> {
        return this.modelRepository.create(data);
    }
    findAll(): Promise<Model[]> {
        return this.modelRepository.findAll();
    }
    findById(id: number): Promise<Model | null> {
        return this.modelRepository.findById(id);
    }
    update(id: number, data: UpdateModelDto): Promise<Model> {
        return this.modelRepository.update(id, data);
    }
    delete(id: number): Promise<void> {
        return this.modelRepository.delete(id);
    }
}
