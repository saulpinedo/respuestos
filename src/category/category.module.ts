import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: 'CategoryRepositoryInterface',
      useClass: CategoryRepository
    },
    PrismaService
  ]
})
export class CategoryModule { }
