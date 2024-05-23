import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class AdminEntity
{
    @PrimaryGeneratedColumn()
    id_admin: number;

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
}