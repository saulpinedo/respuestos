import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { PrismaService } from 'src/prisma.service';
import { ItemRepository } from './item.repository';

@Module({
  controllers: [ItemController],
  providers: [
    ItemService,
    {
      provide: 'ItemRepositoryInterface',
      useClass: ItemRepository
    },
    PrismaService
  ]
})
export class ItemModule { }
