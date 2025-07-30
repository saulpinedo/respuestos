import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from 'generated/prisma/wasm';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Item> {
        return this.itemService.findById(Number(id));
    }
    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemService.create(createItemDto);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto): Promise<Item> {
        return this.itemService.update(Number(id), updateItemDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.itemService.delete(Number(id));
    }

}
