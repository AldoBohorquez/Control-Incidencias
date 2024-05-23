import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AreaEntity } from './entity/area.entity';
import { AreaDto } from './dto/area.dto';

@Injectable()
export class AreaService {

    constructor(private dataSource:DataSource ) { }

    async getAreas()
    {
        try {
            const areasFind = await this.dataSource.getRepository(AreaEntity).find({relations:['incident']});
            if (!areasFind) {
                return new HttpException('No se encontraron areas',HttpStatus.NOT_FOUND)
            }
            return areasFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getArea(id_area:number)
    {
        try {
            const areaFind = await this.dataSource.getRepository(AreaEntity).findOne({where:{id_area:id_area},relations:['incident']});
            if (!areaFind) {
                return new HttpException('No se encontro el area',HttpStatus.NOT_FOUND)
            }
            return areaFind;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }


    async createArea(area:AreaDto)
    {
        try {
            const bodyArea = this.dataSource.getRepository(AreaEntity).create(area);
            return await this.dataSource.getRepository(AreaEntity).save(bodyArea);
        } catch (error) {
            throw new HttpException('Error al guardar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateArea(id:number,area:AreaDto)
    {
        try {
            const areaFind = await this.dataSource.getRepository(AreaEntity).findOne({where:{id_area:id}});
            if (!areaFind) {
                return new HttpException('No se encontro el area',HttpStatus.NOT_FOUND)
            }
            return await this.dataSource.getRepository(AreaEntity).update({id_area:areaFind.id_area},area);
        } catch (error) {
            throw new HttpException('Error al actualizar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async deleteArea(id:number)
    {
        try {
            const areaFind = await this.dataSource.getRepository(AreaEntity).findOne({where:{id_area:id}});
            if (!areaFind) {
                return new HttpException('No se encontro el area',HttpStatus.NOT_FOUND)
            }
            return await this.dataSource.getRepository(AreaEntity).delete({id_area:areaFind.id_area});
        } catch (error) {
            throw new HttpException('Error al eliminar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getAreaIncidents(area:string)
    {
        try {
            const areaFind = await this.dataSource.getRepository(AreaEntity).findOne({where:{nombre:area},relations:['incident']});
            if (!areaFind) {
                return new HttpException('No se encontro el area',HttpStatus.NOT_FOUND)
            }
            return areaFind.incident;
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }
}
