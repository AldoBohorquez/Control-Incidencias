import { IncidentsEntity } from "src/incidents/entity/indicents.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('area')
export class AreaEntity
{
    @PrimaryGeneratedColumn()
    id_area: number;

    @Column({type: 'varchar', length: 60})
    nombre:string;

    @Column({type:'varchar',length:300})
    descripcion:string;

    @OneToMany(()=>IncidentsEntity,(status)=>status.status,{nullable:true})
    incident:IncidentsEntity[];
}