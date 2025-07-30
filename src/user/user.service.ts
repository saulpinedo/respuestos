import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { IUserRepository } from './interfaces/user-repository.interface';

@Injectable()
export class UserService implements IUserRepository {
    constructor(
        @Inject('UserRepositoryInterface')
        private readonly userRepository: IUserRepository
    ) { }

    async create(data: CreateUserDto): Promise<User> {
        return this.userRepository.create(data);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findById(id: number): Promise<User | null> {
        return this.userRepository.findById(id);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findByEmail(email);
    }

    async update(id: number, data: UpdateUserDto): Promise<User> {
        return this.userRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        return this.userRepository.delete(id);
    }
}
