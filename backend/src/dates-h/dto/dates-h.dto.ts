import { IsDate, IsNumber, IsString } from "class-validator";

export class DateshDto {

    @IsDate()
    fechaI:Date;
    @IsDate()
    fechaF:Date;
    @IsString()
    estatus:string;
}