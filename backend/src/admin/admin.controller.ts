import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.dto';
import { AdminLoginDto } from './dto/adminLogin.dto';

@Controller('admin')
export class AdminController {

    constructor(private serviceAdmin:AdminService) { }

    @Get()
    getAdmins()
    {
        return this.serviceAdmin.getAdmins();
    }

    @Get(':id')
    getAdmin(@Param('id') id:number)
    {
        return this.serviceAdmin.getAdmin(id);
    }

    @Post()
    createAdmin(@Body() bodyAdmin:AdminDto)
    {
        return this.serviceAdmin.createAdmin(bodyAdmin);
    }

    @Post('login')
    loginAdmin(@Body() bodyAdmin:AdminLoginDto)
    {
        console.log(bodyAdmin);
        
        return this.serviceAdmin.loginAdmin(bodyAdmin.correo,bodyAdmin.password);
    }

    @Put(':id')
    updateAdmin(@Param('id') id:number,@Body() bodyAdmin:AdminDto)
    {
        return this.serviceAdmin.updateAdmin(id,bodyAdmin);
    }

    @Delete(':id')
    deleteAdmin(@Param('id') id:number)
    {
        return this.serviceAdmin.deleteAdmin(id);
    }


}
