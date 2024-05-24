import { IsDate, IsNumber, IsString } from "class-validator";

export class SolutionsDto
{
    @IsString()
    titulo:string;
    @IsString()
    desc:string;
    @IsDate()
    fechaI:Date;
    @IsNumber()
    incidentId:number;
}