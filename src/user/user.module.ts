import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository
    },
    UserService,
    PrismaService,
    UserRepository
  ],
})
export class UserModule { }
