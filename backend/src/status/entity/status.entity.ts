import { IncidentsEntity } from "src/incidents/entity/indicents.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('status')
export class StatusEntity
{
    @PrimaryGeneratedColumn()
    id_status: number;

    @Column({type: 'varchar', length: 60})
    nombre:string;

    @Column({type:'varchar',length:300})
    descripcion:string;

    @OneToMany(()=>IncidentsEntity,(status)=>status.status,{nullable:true})
    incident:IncidentsEntity[];
}