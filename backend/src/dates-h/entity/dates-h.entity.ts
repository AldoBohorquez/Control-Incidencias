import { IncidentsEntity } from "src/incidents/entity/indicents.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('datesh')
export class DateshEntity
{
    @PrimaryGeneratedColumn()
    id_Dates_h: number;

    @Column({type: 'date'})
    fechaI: Date;

    @Column({type: 'date'})
    fechaF: Date;

    @Column({type: 'varchar', length: 20})
    estatus: string;

    @ManyToOne(()=>IncidentsEntity,(incident) => incident.user)
    incidents: IncidentsEntity;
}