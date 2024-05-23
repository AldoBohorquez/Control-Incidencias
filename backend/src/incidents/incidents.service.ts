import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { IncidentsEntity } from './entity/indicents.entity';
import { IncidentsDto } from './dto/incidents.dto';
import { UsersEntity } from 'src/users/entity/users.entity';

@Injectable()
export class IncidentsService {

    constructor(private dataSource:DataSource) { }

    async getIncidents()
    {
        try {
            const incidentsFind = await this.dataSource.getRepository(IncidentsEntity).find({relations:['users','dateh']});

            if(!incidentsFind)
            {
                return new HttpException('No se encontraron incidentes',HttpStatus.NOT_FOUND)
            }

            return incidentsFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getIncident(id_incident:number)
    {
        try {
            const incidentFind = await this.dataSource.getRepository(IncidentsEntity).findOne({where:{id_incident:id_incident},relations:['users','dateh']});

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

            const userFind = await this.dataSource.getRepository(UsersEntity).findOne({where:{id_user:incident.userId}});

            if(!userFind)
            {
                return new HttpException('No se encontro el usuario',HttpStatus.NOT_FOUND)
            }

            const saveIncident = await this.dataSource.getRepository(IncidentsEntity).save(bodyIncident);

            userFind.incidents.push(saveIncident);

            await this.dataSource.getRepository(UsersEntity).save(userFind);

            return await this.dataSource.getRepository(IncidentsEntity).save(saveIncident);
        } catch (error) {
            throw new HttpException('Error al guardar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }


}
