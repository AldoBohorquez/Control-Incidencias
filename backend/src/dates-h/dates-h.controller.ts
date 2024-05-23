import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DatesHService } from './dates-h.service';
import { DateshDto } from './dto/dates-h.dto';

@Controller('dates-h')
export class DatesHController {
    constructor(private serviceDatesh:DatesHService){}

    @Get()
    getDatesH(){
        return this.serviceDatesh.getDatesH();
    }
    @Get('id')
    getDatesh(@Param('id_Dates_h') id:number){
        return this.serviceDatesh.getDatesh(id);
    }
    @Post()
    createDatesh(@Body() datesh:DateshDto){
        return this.serviceDatesh.createDatesh(datesh);
    }
    @Put('id')
    updateDatesh(@Param('id') id:number,@Body() datesh:DateshDto){
        return this.serviceDatesh.updateDatesh(id,datesh);
    }
    @Delete('id')
    deleteDatesh(@Param('id') id:number){
        return this.serviceDatesh.deleteDatesh(id);
    }
}
