import { IsJSON, IsNumber, IsString } from "class-validator";
import { UsersEntity } from "src/users/entity/users.entity";

export class IncidentsDto {

    @IsString()
    titulo:string;

    @IsString()
    descripcion:string;

    archivos:Buffer

    @IsNumber()
    userId:number;

    @IsNumber()
    statusId:number;

    @IsNumber()
    areaId:number;
}