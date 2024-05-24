import { IncidentsEntity } from "src/incidents/entity/indicents.entity";
import { TestsEntity } from "src/tests/entity/test.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('solutions')
export class SolutionsEntity
{
    @PrimaryGeneratedColumn()
    id_solution:number;

    @Column()
    titulo:string;

    @Column()
    desc:string;

    @Column()
    fechaI:Date;

    @ManyToOne(()=>IncidentsEntity,(incident)=>incident.solution,{nullable:true})
    incident:IncidentsEntity;

    @OneToMany(()=>TestsEntity,(test)=>test.solution,{nullable:true})
    test:TestsEntity[];
}