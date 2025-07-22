export class CreateUserDto {
    readonly nombre: string;
    readonly email: string;
    readonly password: string;
    readonly telefono?: string;
    readonly roleId?: number;
} 