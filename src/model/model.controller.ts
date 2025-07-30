import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from 'generated/prisma/wasm';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Controller('model')
export class ModelController {
    constructor(private readonly modelService: ModelService) { }
    @Get()
    async findAll(): Promise<Model[]> {
        return this.modelService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Model> {
        return this.modelService.findById(Number(id));
    }
    @Post()
    async create(@Body() createModelDto: CreateModelDto): Promise<Model> {
        return this.modelService.create(createModelDto);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateModelDto: UpdateModelDto): Promise<Model> {
        return this.modelService.update(Number(id), updateModelDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.modelService.delete(Number(id));
    }
}
