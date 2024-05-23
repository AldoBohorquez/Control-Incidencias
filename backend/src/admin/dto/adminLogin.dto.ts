import { IsString } from "class-validator";

export class AdminLoginDto {
    @IsString()
    correo: string;
    @IsString()
    password: string;
}