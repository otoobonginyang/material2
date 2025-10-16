

import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Base{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    date: Date
}