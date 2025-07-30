import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';
import { ModelRepository } from './model.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ModelController],
  providers: [{
    provide: 'ModelRepositoryInterface',
    useClass: ModelRepository
  },
    ModelService,
    PrismaService
  ]
})
export class ModelModule { }
