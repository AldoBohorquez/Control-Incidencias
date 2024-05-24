import { IsBoolean, IsString } from "class-validator";

export class AdminDto {

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
}