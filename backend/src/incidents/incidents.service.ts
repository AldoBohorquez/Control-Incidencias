import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { IncidentsEntity } from './entity/indicents.entity';
import { IncidentsDto } from './dto/incidents.dto';
import { UsersEntity } from 'src/users/entity/users.entity';
import { StatusEntity } from 'src/status/entity/status.entity';
import { AreaEntity } from 'src/area/entity/area.entity';

@Injectable()
export class IncidentsService {

    constructor(private dataSource:DataSource) { }

    async getIncidents()
    {
        try {
            const incidentsFind = await this.dataSource.getRepository(IncidentsEntity).find({relations:['user','dateh','solution','status','area']});

            if(!incidentsFind)
            {
                return new HttpException('No se encontraron incidentes',HttpStatus.NOT_FOUND)
            }

            return incidentsFind;
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST)
        }
    }

    async getIncident(id_incident:number)
    {
        try {
            const incidentFind = await this.dataSource.getRepository(IncidentsEntity).findOne({where:{id_incident:id_incident},relations:['user','dateh','solution','status','area']});

            if(!incidentFind)
            {
                return new HttpException('No se encontro el incidente',HttpStatus.NOT_FOUND)
            }

            return incidentFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createIncident(incident:IncidentsDto)
    {
        try {
            const bodyIncident = this.dataSource.getRepository(IncidentsEntity).create(incident);

            const userFind = await this.dataSource.getRepository(UsersEntity).findOne({where:{id_user:incident.userId},relations:['incidents']});

            if(!userFind)
            {
                return new HttpException('No se encontro el usuario',HttpStatus.NOT_FOUND)
            }

            const statusFind = await this.dataSource.getRepository(StatusEntity).findOne({where:{id_status:incident.statusId},relations:['incident']});

            if(!statusFind)
            {
                return new HttpException('No se encontro el status',HttpStatus.NOT_FOUND)
            }

            const areaFind = await this.dataSource.getRepository(AreaEntity).findOne({where:{id_area:incident.areaId},relations:['incident']});

            if(!areaFind)
            {
                return new HttpException('No se encontro el area',HttpStatus.NOT_FOUND)
            }

            const saveIncident = await this.dataSource.getRepository(IncidentsEntity).save(bodyIncident);

            areaFind.incident.push(saveIncident);

            statusFind.incident.push(saveIncident);

            userFind.incidents.push(saveIncident);

            await this.dataSource.getRepository(AreaEntity).save(areaFind);

            await this.dataSource.getRepository(UsersEntity).save(userFind);

            await this.dataSource.getRepository(StatusEntity).save(statusFind);

            return await this.dataSource.getRepository(IncidentsEntity).save(saveIncident);
        } catch (error) {
            throw new HttpException('Error al guardar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateIncident(id_incident:number,incident:IncidentsDto)
    {
        try {
            const incidentFind = await this.dataSource.getRepository(IncidentsEntity).findOne({where:{id_incident:id_incident}});

            if(!incidentFind)
            {
                return new HttpException('No se encontro el incidente',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(IncidentsEntity).update({id_incident:incidentFind.id_incident},incident);
        } catch (error) {
            throw new HttpException('Error al actualizar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async deleteIncident(id_incident:number)
    {
        try {
            const incidentFind = await this.dataSource.getRepository(IncidentsEntity).findOne({where:{id_incident:id_incident}});

            if(!incidentFind)
            {
                return new HttpException('No se encontro el incidente',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(IncidentsEntity).remove(incidentFind);
        } catch (error) {
            throw new HttpException('Error al eliminar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }


}
