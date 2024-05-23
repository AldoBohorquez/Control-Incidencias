import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('status')
export class StatusEntity
{
    @PrimaryGeneratedColumn()
    id_status: number;

    @Column({type: 'varchar', length: 60})
    nombre:string;

    @Column({type:'varchar',length:300})
    descripcion:string;

    @Column({type:'integer'})
    incidentId:number;
}