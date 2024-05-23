import { IsDate, IsString } from "class-validator";

export class SolutionsDto
{
    @IsString()
    titulo:string;
    @IsString()
    desc:string;
    @IsDate()
    fechaI:Date;
}