import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { IncidentsDto } from './dto/incidents.dto';
import { IncidentsAsignedDto } from './dto/incidentsAsigned.dto';

@Controller('incidents')
export class IncidentsController {

    constructor(private serviceIncident:IncidentsService) { }

    @Get()
    getIncidents()
    {
        return this.serviceIncident.getIncidents();
    }

    @Get(':id')
    getIncident(@Param('id') id:number)
    {
        return this.serviceIncident.getIncident(id);
    }

    @Post()
    createIncident(@Body() bodyIncident:IncidentsDto)
    {
        return this.serviceIncident.createIncident(bodyIncident);
    }

    @Post('asigned')
    asignedIncident(@Body() bodyIncident:IncidentsAsignedDto)
    {
        return this.serviceIncident.updateUserAsignated(bodyIncident.id_incident,bodyIncident.userId);
    }

    @Put(':id')
    updateIncident(@Param('id') id:number,@Body() bodyIncident:IncidentsDto)
    {
        return this.serviceIncident.updateIncident(id,bodyIncident);
    }

    @Delete(':id')
    deleteIncident(@Param('id') id:number)
    {
        return this.serviceIncident.deleteIncident(id);
    }
}
