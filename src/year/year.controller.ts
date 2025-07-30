import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { YearService } from './year.service';
import { Year } from 'generated/prisma/wasm';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';

@Controller('year')
export class YearController {
    constructor(private readonly yearService: YearService) { }
    @Get()
    async findAll(): Promise<Year[]> {
        return this.yearService.findAll();
    }
    @Post()
    async create(@Body() createYearDto: CreateYearDto): Promise<Year> {
        return this.yearService.create(createYearDto);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateYearDto: UpdateYearDto): Promise<Year> {
        return this.yearService.update(Number(id), updateYearDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.yearService.delete(Number(id));
    }
}
