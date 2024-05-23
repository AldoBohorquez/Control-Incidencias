import { IsString } from "class-validator";

export class AdminDto {
    @IsString()
    id_admin: number;
    @IsString()
    nombre: string;
    @IsString()
    apPat: string;
    @IsString()
    apMat: string;
    @IsString()
    correo: string;
    @IsString()
    contrasena: string;
}