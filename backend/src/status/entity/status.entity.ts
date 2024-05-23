import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('status')
export class StatusEntity
{
    @PrimaryGeneratedColumn()
    id_status: number;

    @Column({type: 'varchar', length: 60})
    titulo:string;

    @Column({type:'varchar',length:300})
    descripcion:string;
}