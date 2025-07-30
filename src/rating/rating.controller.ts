import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RatingService } from './rating.service';
import { Rating } from 'generated/prisma/wasm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Controller('rating')
export class RatingController {
    constructor(private readonly ratingService: RatingService) { }
    @Get()
    async findAll(): Promise<Rating[]> {
        return this.ratingService.findAll();
    }
    @Post()
    async create(@Body() createRatingDto: CreateRatingDto): Promise<Rating> {
        return this.ratingService.create(createRatingDto);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto): Promise<Rating> {
        return this.ratingService.update(Number(id), updateRatingDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.ratingService.delete(Number(id));
    }
}
