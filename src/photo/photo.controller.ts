import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from 'generated/prisma/wasm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }
    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }
    @Post()
    async create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
        return this.photoService.create(createPhotoDto);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto): Promise<Photo> {
        return this.photoService.update(Number(id), updatePhotoDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.photoService.delete(Number(id));
    }
}
