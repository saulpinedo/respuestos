import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserRepository {
    create(data: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: number, data: UpdateUserDto): Promise<User>;
    delete(id: number): Promise<void>;
} 