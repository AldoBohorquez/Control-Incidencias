import { IsNumber, IsString } from "class-validator";

export class IncidentsDto {

    @IsString()
    titulo:string;

    @IsString()
    descripcion:string;

    archivos:Buffer

    @IsNumber()
    userId:number;
    
}