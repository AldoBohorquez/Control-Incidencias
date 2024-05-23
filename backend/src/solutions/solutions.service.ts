import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SolutionsEntity } from './entity/solutions.entity';
import { IncidentsEntity } from 'src/incidents/entity/indicents.entity';
import { SolutionsDto } from './dto/solutions.dto';

@Injectable()
export class SolutionsService {

    constructor(private dataSource:DataSource) {}

    async getSolutions()
    {
        try {
            const solutionsFind = await this.dataSource.getRepository(SolutionsEntity).find({relations:['incident']})
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getSolution(id:number)
    {
        try {
            const solutionFind = await this.dataSource.getRepository(SolutionsEntity).findOne({where:{id_solution:id},relations:['incident']})
            if (!solutionFind) {
                throw new HttpException('No se encontro la solucion',HttpStatus.NOT_FOUND)
            }
            return solutionFind
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createSolution(bodySolution:SolutionsDto)
    {
        try {
            const solution = this.dataSource.getRepository(SolutionsEntity).create(bodySolution)

            const incidentFind = await this.dataSource.getRepository(IncidentsEntity).findOne({where:{id_incident:solution.id_solution}})
            if (!incidentFind) {
                throw new HttpException('No se encontro el incidente',HttpStatus.NOT_FOUND)
            }

            const saveSolution = await this.dataSource.getRepository(SolutionsEntity).save(solution)

            incidentFind.solution.push(saveSolution)

            await this.dataSource.getRepository(IncidentsEntity).save(incidentFind)
            return saveSolution
        } catch (error) {
            throw new HttpException('Error al crear la solucion',HttpStatus.BAD_REQUEST,error)
        }
    }
}
