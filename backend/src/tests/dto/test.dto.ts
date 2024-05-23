import { IsDate, IsString } from "class-validator";

export class TestsDto
{
    @IsString()
    nameUser:string;
    @IsString()
    description:string;
    @IsDate()
    fechaI:Date;
}