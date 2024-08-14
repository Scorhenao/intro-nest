import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail } from 'sequelize-typescript';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    email?: string; 
    password?: string;
}
