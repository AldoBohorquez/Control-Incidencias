import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsersEntity } from './entity/users.entity';
import { UsersDto } from './dto/users.dto';
import { IncidentsEntity } from 'src/incidents/entity/indicents.entity';
import { AdminEntity } from 'src/admin/entity/admin.entity';

@Injectable()
export class UsersService {

    constructor(private dataSource:DataSource) { }

    async getUsers()
    {
        try {
            const usersFind = await this.dataSource.getRepository(UsersEntity).find({relations:['incidents'],select:['id_user','nombre','apPat','apMat','correo','area','puesto']});

            if(!usersFind)
            {
                return new HttpException('No se encontraron usuarios',HttpStatus.NOT_FOUND)
            }

            return usersFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getUser(id_user:number)
    {
        try {
            const userFind = await this.dataSource.getRepository(UsersEntity).findOne({where:{id_user:id_user},relations:['incidents'],select:['id_user','nombre','apPat','apMat','correo','area','puesto']});

            if(!userFind)
            {
                return new HttpException('No se encontro el usuario',HttpStatus.NOT_FOUND)
            }

            return userFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createUser(user:UsersDto)
    {
        try {
            const bodyUser = this.dataSource.getRepository(UsersEntity).create(user);

            const findIncident = await this.dataSource.getRepository(IncidentsEntity).findOne({where:{id_incident:user.indicentId}});

            if(!findIncident)
            {
                return new HttpException('No se encontro el incidente',HttpStatus.NOT_FOUND)
            }

            bodyUser.incidents.push(findIncident);
            

            return await this.dataSource.getRepository(UsersEntity).save(bodyUser);
        } catch (error) {
            throw new HttpException('Error al guardar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateUser(id_user:number,user:UsersDto)
    {
        try {
            const userFind = await this.dataSource.getRepository(UsersEntity).findOne({where:{id_user:id_user}});

            if(!userFind)
            {
                return new HttpException('No se encontro el usuario',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(UsersEntity).update({id_user:userFind.id_user},user);
        } catch (error) {
            throw new HttpException('Error al actualizar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async deleteUser(id_user:number)
    {
        try {
            const userFind = await this.dataSource.getRepository(UsersEntity).findOne({where:{id_user:id_user}});

            if(!userFind)
            {
                return new HttpException('No se encontro el usuario',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(UsersEntity).remove(userFind);
        } catch (error) {
            throw new HttpException('Error al eliminar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async encryptPassword(password:string)
    {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password,salt);
    }

    async login(correo:string,password:string)
    {
        try {
            const userFind = await this.dataSource.getRepository(UsersEntity).findOne({where:{correo:correo}});

            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{correo:correo}});


            if(!userFind || !adminFind)
            {
                return new HttpException('Correo no registrado',HttpStatus.BAD_REQUEST)
            }

            if(userFind)
            {
                const bcrypt = require('bcrypt');
                const compare = bcrypt.compare(password,userFind.password);

                if(!compare)
                {
                    return new HttpException('Contraseña incorrecta',HttpStatus.BAD_REQUEST)
                }

                return {id:userFind.id_user,nombre:userFind.nombre,apPat:userFind.apPat,apMat:userFind.apMat,correo:userFind.correo,area:userFind.area,puesto:userFind.puesto}
            }

            if(adminFind)
            {
                const bcrypt = require('bcrypt');
                const compare = bcrypt.compare(password,adminFind.password);

                if(!compare)
                {
                    return new HttpException('Contraseña incorrecta',HttpStatus.BAD_REQUEST)
                }

                return {id:adminFind.id_admin,nombre:adminFind.nombre,apPat:adminFind.apPat,apMat:adminFind.apMat,correo:adminFind.correo}
            }

            return new HttpException('Error al iniciar sesion',HttpStatus.BAD_REQUEST)
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

}
