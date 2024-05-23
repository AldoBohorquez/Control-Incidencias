import { IncidentsEntity } from "src/incidents/entity/indicents.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}