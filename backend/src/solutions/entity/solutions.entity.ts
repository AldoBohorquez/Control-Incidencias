import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('solutions')
export class SolutionsEntity
{
    @PrimaryGeneratedColumn()
    id_solution:number;

    @Column()
    titulo:string;

    @Column()
    desc:string;

    @Column()
    fechaI:Date;

}