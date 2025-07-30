import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { Category } from 'generated/prisma/client';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Category> {
        return this.categoryService.findById(Number(id));
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.create(createCategoryDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return this.categoryService.update(Number(id), updateCategoryDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.categoryService.delete(Number(id));
    }
}
