import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.userService.findById(Number(id));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(Number(id), updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.userService.delete(Number(id));
        return { message: 'Usuario eliminado correctamente' };
    }
}
