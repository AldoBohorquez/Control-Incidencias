import { IsDate, IsNumber, IsString } from "class-validator";

export class TestsDto
{
    @IsString()
    nameUser:string;
    @IsString()
    description:string;
    @IsDate()
    fechaI:Date;
    @IsNumber()
    solutionsId:number;
}