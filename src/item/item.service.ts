import { Inject, Injectable } from '@nestjs/common';
import { IItemRepository } from './interfaces/item-repository.interface';
import { Item } from 'generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService implements IItemRepository {
    constructor(
        @Inject('ItemRepositoryInterface')
        private readonly itemRepository: IItemRepository
    ) { }

    create(data: CreateItemDto): Promise<Item> {
        return this.itemRepository.create(data);
    }
    findAll(): Promise<Item[]> {
        return this.itemRepository.findAll();
    }
    findById(id: number): Promise<Item | null> {
        return this.itemRepository.findById(id);
    }
    update(id: number, data: UpdateItemDto): Promise<Item> {
        return this.itemRepository.update(id, data);
    }
    delete(id: number): Promise<void> {
        return this.itemRepository.delete(id);
    }
}
