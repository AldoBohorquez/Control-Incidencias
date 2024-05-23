import { IncidentsEntity } from "src/incidents/entity/indicents.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UsersEntity
{
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column({type: 'varchar', length: 100})
    nombre: string;

    @Column({type: 'varchar', length: 100})
    apPat: string;

    @Column({type: 'varchar', length: 100})
    apMat: string;

    @Column({type: 'varchar', length: 60})
    correo: string;

    @Column({type: 'varchar', length: 80})
    password: string;

    @Column({type: 'varchar', length: 50})
    area:string;

    @Column({type: 'varchar', length: 50})
    puesto:string;

    @OneToMany(()=>IncidentsEntity,(incident)=>incident.user,{nullable:true})
    incidents:IncidentsEntity[];
}