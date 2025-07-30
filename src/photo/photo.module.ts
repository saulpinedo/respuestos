import { Module } from '@nestjs/common';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { PhotoRepository } from './photo.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PhotoController],
  providers: [
    PhotoService,
    {
      provide: 'PhotoRepositoryInterface',
      useClass: PhotoRepository
    },
    PrismaService
  ]
})
export class PhotoModule { }
