import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IUserRepository } from './interfaces/user-repository.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data: {
                nombre: data.nombre,
                email: data.email,
                password: data.password,
                telefono: data.telefono ?? '', // Valor por defecto si es requerido
                role_id: data.roleId,
                // Agrega otros campos requeridos si los hay
            },
        });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async update(id: number, data: UpdateUserDto): Promise<User> {
        return this.prisma.user.update({ where: { id }, data });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }
} 