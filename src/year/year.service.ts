import { Inject, Injectable } from '@nestjs/common';
import { IYearRepository } from './interfaces/year-repository.interface';
import { CreateYearDto } from './dto/create-year.dto';
import { Year } from 'generated/prisma/wasm';
import { UpdateYearDto } from './dto/update-year.dto';

@Injectable()
export class YearService implements IYearRepository {
    constructor(
        @Inject('YearRepositoryInterface')
        private readonly yearRepository: IYearRepository
    ) { }
    create(data: CreateYearDto): Promise<Year> {
        return this.yearRepository.create(data);
    }
    findAll(): Promise<Year[]> {
        return this.yearRepository.findAll();
    }
    findById(id: number): Promise<Year | null> {
        return this.yearRepository.findById(id);
    }
    update(id: number, data: UpdateYearDto): Promise<Year> {
        return this.yearRepository.update(id, data);
    }
    delete(id: number): Promise<void> {
        return this.yearRepository.delete(id);
    }
}
