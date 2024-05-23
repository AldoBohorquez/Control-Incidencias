import { AreaEntity } from "src/area/entity/area.entity";
import { DateshEntity } from "src/dates-h/entity/dates-h.entity";
import { SolutionsEntity } from "src/solutions/entity/solutions.entity";
import { StatusEntity } from "src/status/entity/status.entity";
import { UsersEntity } from "src/users/entity/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('incidents')
export class IncidentsEntity
{
    @PrimaryGeneratedColumn()
    id_incident: number;

    @Column({type: 'varchar', length: 60,unique:true})
    titulo:string;

    @Column({type:'varchar',length:300})
    descripcion:string;

    @Column({type:'bytea',nullable:true})
    archivo:Buffer;

    @OneToMany(()=>SolutionsEntity,(solution)=>solution.incident,{nullable:true})
    solution:SolutionsEntity[];

    @OneToMany(()=>DateshEntity,(dateh)=>dateh.incidents,{nullable:true})
    dateh:DateshEntity[];

    @ManyToOne(()=>UsersEntity,(user)=>user.incidents,{nullable:true})
    user:UsersEntity;

    @ManyToOne(()=>StatusEntity,(status)=>status.incident,{nullable:true})
    status:StatusEntity;

    @ManyToOne(()=>AreaEntity,(area)=>area.incident,{nullable:true})
    area:AreaEntity;
}