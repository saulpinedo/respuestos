import { Module } from '@nestjs/common';
import { YearController } from './year.controller';
import { YearService } from './year.service';
import { PrismaService } from 'src/prisma.service';
import { YearRepository } from './year.repository';

@Module({
  controllers: [YearController],
  providers: [
    {
      provide: 'YearRepositoryInterface',
      useClass: YearRepository
    },
    YearService,
    PrismaService
  ]
})
export class YearModule { }
