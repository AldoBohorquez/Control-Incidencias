import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { StatusEntity } from './entity/status.entity';
import { StatusDto } from './dto/status.dto';

@Injectable()
export class StatusService {

    constructor(private dataSource:DataSource) { }

    async getStatus()
    {
        try {
            const statusFind = await this.dataSource.getRepository(StatusEntity).find({relations:['incident']});

            if(!statusFind)
            {
                return new HttpException('No se encontraron status',HttpStatus.NOT_FOUND)
            }

            return statusFind;
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST)
        }
    }

    async getStatusId(id_status:number)
    {
        try {
            const statusFind = await this.dataSource.getRepository(StatusEntity).findOne({where:{id_status:id_status},relations:['incident']});

            if(!statusFind)
            {
                return new HttpException('No se encontro el status',HttpStatus.NOT_FOUND)
            }

            return statusFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createStatus(status:StatusDto)
    {
        try {
            const bodyStatus = this.dataSource.getRepository(StatusEntity).create(status);

            return await this.dataSource.getRepository(StatusEntity).save(bodyStatus);
        } catch (error) {
            throw new HttpException('Error al guardar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateStatus(id:number,status:StatusDto)
    {
        try {
            const statusFind = await this.dataSource.getRepository(StatusEntity).findOne({where:{id_status:id}});
            if(!statusFind)
            {
                return new HttpException('No se encontro el status',HttpStatus.NOT_FOUND)
            }
            return await this.dataSource.getRepository(StatusEntity).update({id_status:statusFind.id_status},status);
        } catch (error) {
            throw new HttpException('Error al actualizar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async deleteStatus(id_status:number)
    {
        try {
            const statusFind = await this.dataSource.getRepository(StatusEntity).findOne({where:{id_status:id_status}});
            if(!statusFind)
            {
                return new HttpException('No se encontro el status',HttpStatus.NOT_FOUND)
            }
            return await this.dataSource.getRepository(StatusEntity).remove(statusFind);
        } catch (error) {
            throw new HttpException('Error al eliminar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }
}
