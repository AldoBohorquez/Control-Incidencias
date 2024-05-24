import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {

    constructor(private serviceuser:UsersService) { }

    @Get()
    getUsers()
    {
        return this.serviceuser.getUsers();
    }

    @Get(':id')
    getUser(@Param('id') id:number)
    {
        return this.serviceuser.getUser(id);
    }

    @Get('area/:area')
    getUserArea(@Param('area') area:string)
    {
        return this.serviceuser.getUsersbyArea(area);
    }

    @Post()
    createUser(@Body() bodyUser:UsersDto)
    {
        return this.serviceuser.createUser(bodyUser);
    }

    @Post('login')
    loginUser(@Body() bodyUser:UsersDto)
    {
        return this.serviceuser.login(bodyUser.correo,bodyUser.password);
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number)
    {
        return this.serviceuser.deleteUser(id);
    }

    @Put(':id')
    updateUser(@Param('id') id:number,@Body() bodyUser:UsersDto)
    {
        return this.serviceuser.updateUser(id,bodyUser);
    }
}
