import { SolutionsEntity } from "src/solutions/entity/solutions.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tests')
export class TestsEntity
{
    @PrimaryGeneratedColumn()
    id_test:number;

    @Column()
    nameUser:string;

    @Column()
    description:string;

    @Column()
    fechaI:Date;

    @ManyToOne(()=>SolutionsEntity,(solution)=>solution.test,{nullable:true})
    solution:SolutionsEntity;
}