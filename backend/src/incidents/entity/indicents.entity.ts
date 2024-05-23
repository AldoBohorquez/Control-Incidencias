import { UsersEntity } from "src/users/entity/users.entity";
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('incidents')
export class IncidentsEntity
{
    @PrimaryGeneratedColumn()
    id_incident: number;

    @ManyToOne(()=>UsersEntity,(user)=>user.incidents)
    user:UsersEntity;
}