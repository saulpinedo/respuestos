import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { BrandRepository } from './brand.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BrandController],
  providers: [
    {
      provide: 'BrandRepositoryInterface',
      useClass: BrandRepository
    },
    BrandService,
    PrismaService
  ]
})
export class BrandModule { }
