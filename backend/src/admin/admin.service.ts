import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AdminEntity } from './entity/admin.entity';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {

    constructor(private dataSource:DataSource) { }


    async encryptPassword(password:string)
    {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password,salt);
    }

    async getAdmins()
    {
        try {
            const adminsFind = await this.dataSource.getRepository(AdminEntity).find({select:['id_admin','nombre','apPat','apMat','correo','adminB']});

            if(!adminsFind)
            {
                return new HttpException('No se encontraron administradores',HttpStatus.NOT_FOUND)
            }

            return adminsFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getAdmin(id_admin:number)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_admin:id_admin},select:['id_admin','nombre','apPat','apMat','correo','adminB']});

            if(!adminFind)
            {
                return new HttpException('No se encontro el administrador',HttpStatus.NOT_FOUND)
            }

            return adminFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createAdmin(admin:AdminDto)
    {
        try {
            const bodyAdmin = this.dataSource.getRepository(AdminEntity).create(admin);

            bodyAdmin.password = await this.encryptPassword(bodyAdmin.password);

            return await this.dataSource.getRepository(AdminEntity).save(bodyAdmin);
            
        } catch (error) {
            throw new HttpException('Error al crear el administrador',HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateAdmin(id_admin:number,admin:AdminDto)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_admin:id_admin}});

            if(!adminFind)
            {
                return new HttpException('No se encontro el administrador',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(AdminEntity).update({id_admin:adminFind.id_admin},admin);
        } catch (error) {
            throw new HttpException('Error al actualizar el administrador',HttpStatus.BAD_REQUEST,error)
        }
    }

    async deleteAdmin(id_admin:number)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_admin:id_admin}});

            if(!adminFind)
            {
                return new HttpException('No se encontro el administrador',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(AdminEntity).remove(adminFind);
        } catch (error) {
            throw new HttpException('Error al eliminar el administrador',HttpStatus.BAD_REQUEST,error)
        }
    }

    async loginAdmin(correo:string,contrasena:string)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{correo:correo}});

            if(!adminFind)
            {
                return new HttpException('No se encontro el administrador',HttpStatus.NOT_FOUND)
            }

            const bcrypt = require('bcrypt');
            const match = await bcrypt.compare(contrasena,adminFind.password);

            if(!match)
            {
                return new HttpException('Contraseña incorrecta',HttpStatus.UNAUTHORIZED)
            }

            return adminFind;
        } catch (error) {
            throw new HttpException('Error al iniciar sesion',HttpStatus.BAD_REQUEST,error)
        }
    }
}
