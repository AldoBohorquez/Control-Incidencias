import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusDto } from './dto/status.dto';

@Controller('status')
export class StatusController {

    constructor(private statusService:StatusService) { }

    @Get()
    getStatus()
    {
        return this.statusService.getStatus();
    }

    @Get(':id')
    getStatusId(@Param('id') id_status:number)
    {
        return this.statusService.getStatusId(id_status);
    }

    @Post()
    createStatus(@Body() status:StatusDto)
    {
        return this.statusService.createStatus(status);
    }

    @Put(':id')
    updateStatus(@Param('id') id:number,@Body() status:StatusDto)
    {
        return this.statusService.updateStatus(id,status);
    }

    @Delete(':id')
    deleteStatus(@Param('id') id:number)
    {
        return this.statusService.deleteStatus(id);
    }
}
