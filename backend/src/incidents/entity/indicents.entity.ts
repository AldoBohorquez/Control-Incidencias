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

    @Column({type:'varchar',length:300})
    descripcion:string;

    @Column({type:'bytea'})
    archivo:Buffer;

    @OneToMany(()=>DateshEntity,(dateh)=>dateh.incidents,{nullable:true})
    dateh:DateshEntity[];

    @ManyToOne(()=>UsersEntity,(user)=>user.incidents,{nullable:true})
    user:UsersEntity;
}