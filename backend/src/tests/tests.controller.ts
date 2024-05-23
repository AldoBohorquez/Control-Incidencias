import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsDto } from './dto/test.dto';

@Controller('tests')
export class TestsController {

    constructor(private serviceTest:TestsService) {}

    @Get()
    async getTests()
    {
        return await this.serviceTest.getTests()
    }

    @Get(':id')
    async getTest(@Param('id') id:number)
    {
        return await this.serviceTest.getTest(id)
    }

    @Post('createTest')
    async createTest(@Body() bodyTest:TestsDto)
    {
        return await this.serviceTest.createTest(bodyTest)
    }

    @Put(':id')
    async updateTest(@Param('id') id:number,@Body() bodyTest:TestsDto)
    {
        return await this.serviceTest.updateTest(id,bodyTest)
    }

    @Delete(':id')
    async deleteTest(@Param('id') id:number)
    {
        return await this.serviceTest.deleteTest(id)
    }
}
