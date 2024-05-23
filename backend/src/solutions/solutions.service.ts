import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SolutionsEntity } from './entity/solutions.entity';

@Injectable()
export class SolutionsService {

    constructor(private dataSource:DataSource) {}

    async getSolutions()
    {
        try {
            const solutionsFind = await this.dataSource.getRepository(SolutionsEntity).find({relations:['incidents']})
        } catch (error) {
            throw new HttpException('Error al consultar los datos',HttpStatus.BAD_REQUEST,error)
        }
    }
}
