import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from '@prisma/client';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) { }

    @Get()
    async findAll(): Promise<Brand[]> {
        return this.brandService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Brand> {
        return this.brandService.findById(Number(id));
    }

    @Post()
    async create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
        return this.brandService.create(createBrandDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto): Promise<Brand> {
        return this.brandService.update(Number(id), updateBrandDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.brandService.delete(Number(id));
    }
}
