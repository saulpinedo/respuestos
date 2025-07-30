import { Inject, Injectable } from '@nestjs/common';
import { IBrandRepository } from './interfaces/brand-repository.interface';
import { Brand } from '@prisma/client';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService implements IBrandRepository {
    constructor(
        @Inject('BrandRepositoryInterface')
        private readonly brandRepository: IBrandRepository
    ) { }

    async findAll(): Promise<Brand[]> {
        return this.brandRepository.findAll();
    }

    async findById(id: number): Promise<Brand> {
        return this.brandRepository.findById(id);
    }

    async create(data: CreateBrandDto): Promise<Brand> {
        return this.brandRepository.create(data);
    }

    async update(id: number, data: UpdateBrandDto): Promise<Brand> {
        return this.brandRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        return this.brandRepository.delete(id);
    }
}
