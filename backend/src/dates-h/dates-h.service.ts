import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DateshEntity } from './entity/dates-h.entity';
import { IncidentsEntity } from 'src/incidents/entity/indicents.entity';
import { DateshDto } from './dto/dates-h.dto';

@Injectable()
export class DatesHService {
    constructor(private dataSource:DataSource){}

    async getDatesH(){
        try {
            const dateshFind = await this.dataSource.getRepository(DateshEntity).find({relations:['incidents'], select:['id_Dates_h', 'fechaI','fechaF','estatus']})
            if(!dateshFind) {
                return new HttpException('No se encontro las fechas', HttpStatus.NOT_FOUND)
            }
            return dateshFind;
        }catch(error){
            throw new HttpException('Error al consultar los datos', HttpStatus.BAD_REQUEST,error)
        }
    }

    async getDatesh(id_Dates_h:number){
        try {
            const dateshFind = await this.dataSource.getRepository(DateshEntity).findOne({where: {id_Dates_h:id_Dates_h},relations:['incidents'], select:['id_Dates_h', 'fechaI','fechaF','estatus']})
            if(!dateshFind){
                return new HttpException('Error al consultar los datos', HttpStatus.NOT_FOUND)
            }
            return dateshFind;
        }catch(error){
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createDatesh(datesh:DateshDto){
        try {

            const bodyDatesh =  this.dataSource.getRepository(DateshEntity).create(datesh)
            const incidetsFind = await this.dataSource.getRepository(IncidentsEntity).findOne({where: {id_incident:datesh.dateshId}})
            if(!incidetsFind){
                return new HttpException('Error al consultar los datos', HttpStatus.NOT_FOUND)
            }
            const saveDatesh = await this.dataSource.getRepository(DateshEntity).save(bodyDatesh)
            
            incidetsFind.dateh.push(saveDatesh)
            await this.dataSource.getRepository(IncidentsEntity).save(incidetsFind)
            return await this.dataSource.getRepository(DateshEntity).save(saveDatesh)
        }catch(error){
            throw new HttpException('Error al crear los datos', HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateDatesh(id_Dates_h:number,datesh:DateshDto){
        try {
            const dateshFind = await this.dataSource.getRepository(DateshEntity).findOne({where: {id_Dates_h:id_Dates_h}})
            if(!dateshFind){
                return new HttpException('Error al consultar los datos', HttpStatus.NOT_FOUND)
            }
        
            return await this.dataSource.getRepository(DateshEntity).update({id_Dates_h:dateshFind.id_Dates_h},datesh)
        }catch(error){
            throw new HttpException('Error al actualizar los datos', HttpStatus.BAD_REQUEST,error)
        }
    }
    async deleteDatesh(id_Dates_h:number){
        try {
            const dateshFind = await this.dataSource.getRepository(DateshEntity).findOne({where: {id_Dates_h:id_Dates_h}})
            if(!dateshFind){
                return new HttpException('Error al consultar los datos', HttpStatus.NOT_FOUND)
            }
            return await this.dataSource.getRepository(DateshEntity).remove(dateshFind)
        }catch(error){
            throw new HttpException('Error al eliminar los datos', HttpStatus.BAD_REQUEST,error)
        }
    }
}
