import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaDto } from './dto/area.dto';

@Controller('area')
export class AreaController {

    constructor(private serviceArea:AreaService) { }

    @Get()
    async getAreas()
    {
        return await this.serviceArea.getAreas()
    }

    @Get(':id')
    async getArea(@Param('id') id:number)
    {
        return await this.serviceArea.getArea(id)
    }

    @Get('incident/:area')
    async getAreaIncident(@Param('area') area:string)
    {
        return await this.serviceArea.getAreaIncidents(area)
    }

    @Post()
    async createArea(@Body() bodyArea:AreaDto)
    {
        return await this.serviceArea.createArea(bodyArea)
    }

    @Put(':id')
    async updateArea(@Param('id') id:number,@Body() bodyArea:AreaDto)
    {
        return await this.serviceArea.updateArea(id,bodyArea)
    }

    @Delete(':id')
    async deleteArea(@Param('id') id:number)
    {
        return await this.serviceArea.deleteArea(id)
    }
}
