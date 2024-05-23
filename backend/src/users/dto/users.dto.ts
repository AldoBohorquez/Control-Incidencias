import { IsNumber, IsString } from "class-validator";

export class UsersDto {

    @IsString()
    nombre: string;
    @IsString()
    apPat: string;
    @IsString()
    apMat: string;
    @IsString()
    correo: string;
    @IsString()
    password: string;
    @IsString()
    area: string;
    @IsString()
    puesto: string;
}