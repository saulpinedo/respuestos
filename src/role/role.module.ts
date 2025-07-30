import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { PrismaService } from '../prisma.service';
import { RoleRepository } from './role.repository';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
    {
      provide: 'RoleRepositoryInterface',
      useClass: RoleRepository
    },
    PrismaService
  ],
})
export class RoleModule { }
