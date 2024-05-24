import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SolutionsService } from './solutions.service';
import { SolutionsDto } from './dto/solutions.dto';

@Controller('solutions')
export class SolutionsController {

    constructor(private serviceSolutions:SolutionsService) {}

    @Get()
    async getSolutions()
    {
        return await this.serviceSolutions.getSolutions()
    }

    @Get(':id')
    async getSolution(@Param('id') id:number)
    {
        return await this.serviceSolutions.getSolution(id)
    }

    @Post('crearSolution')
    async createSolution(@Body() bodySolution:SolutionsDto)
    {
        return await this.serviceSolutions.createSolution(bodySolution)
    }

    @Put(':id')
    async updateSolution(@Param('id') id:number,@Body() bodySolution:SolutionsDto)
    {
        return await this.serviceSolutions.updateSolution(id,bodySolution)
    }

    @Delete(':id')
    async deleteSolution(@Param('id') id:number)
    {
        return await this.serviceSolutions.deleteSolution(id)
    }
}
