import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TestsEntity } from './entity/test.entity';
import { IncidentsEntity } from 'src/incidents/entity/indicents.entity';
import { TestsDto } from './dto/test.dto';
import { SolutionsEntity } from 'src/solutions/entity/solutions.entity';

@Injectable()
export class TestsService {

    constructor(private dataSource:DataSource) {}

    async getTests()
    {
        try {
            const testsFind = await this.dataSource.getRepository(TestsEntity).find({relations:['incident','solution']})
            if (!testsFind) {
                return new HttpException('No se encontro los tests',HttpStatus.NOT_FOUND)
            }
            return testsFind
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async getTest(id:number)
    {
        try {
            const testFind = await this.dataSource.getRepository(TestsEntity).findOne({where:{id_test:id},relations:['incident','solution']})
            if (!testFind) {
                return new HttpException('No se encontro el test',HttpStatus.NOT_FOUND)
            }
            return testFind
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async createTest(bodyTest:TestsDto)
    {
        try {
            const test = this.dataSource.getRepository(TestsEntity).create(bodyTest)

            const solutionFind = await this.dataSource.getRepository(SolutionsEntity).findOne({where:{id_solution:test.id_test}})

            if (!solutionFind) {
                return new HttpException('No se encontro la solucion',HttpStatus.NOT_FOUND)
            }

            const saveTest = await this.dataSource.getRepository(TestsEntity).save(test)

            solutionFind.test.push(saveTest)

            await this.dataSource.getRepository(SolutionsEntity).save(solutionFind)
            return saveTest
        } catch (error) {
            throw new HttpException('Error al crear el test',HttpStatus.BAD_REQUEST,error)
        }
    }

    async updateTest(id:number,bodyTest:TestsDto)
    {
        try {
            const testFind = await this.dataSource.getRepository(TestsEntity).findOne({where:{id_test:id}})
            if (!testFind) {
                return new HttpException('No se encontro el test',HttpStatus.NOT_FOUND)
            }
        
            return await this.dataSource.getRepository(TestsEntity).update({id_test:testFind.id_test},bodyTest)
        } catch (error) {
            throw new HttpException('Error al actualizar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }

    async deleteTest(id:number)
    {
        try {
            const testFind = await this.dataSource.getRepository(TestsEntity).findOne({where:{id_test:id}})
            if (!testFind) {
                return new HttpException('No se encontro el test',HttpStatus.NOT_FOUND)
            }

            return await this.dataSource.getRepository(TestsEntity).remove(testFind)
        } catch (error) {
            throw new HttpException('Error al eliminar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }


}
