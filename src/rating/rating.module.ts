import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { PrismaService } from 'src/prisma.service';
import { RatingRepository } from './rating.repository';

@Module({
  controllers: [RatingController],
  providers: [{
    provide: 'RatingRepositoryInterface',
    useClass: RatingRepository
  },
    RatingService,
    PrismaService
  ]
})
export class RatingModule { }
