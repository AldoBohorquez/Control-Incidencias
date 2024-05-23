import { DateshEntity } from "src/dates-h/entity/dates-h.entity";
import { UsersEntity } from "src/users/entity/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('incidents')
export class IncidentsEntity
{
    @PrimaryGeneratedColumn()
    id_incident: number;

    @Column({type: 'varchar', length: 60})
    titulo:string;

    @Column({type:'varchar',length:200})
    descripcion:string;

    @Column()

    @OneToMany(()=>DateshEntity,(dateh)=>dateh.incident)
    dateh:DateshEntity[];

    @ManyToOne(()=>UsersEntity,(user)=>user.incidents)
    user:UsersEntity;
}