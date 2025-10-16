import { Base } from "src/entiy/base.entity";
import { Column, Entity } from "typeorm";

export class Material {}


@Entity()
export class Materialentity extends Base{

@ Column ()
  type: string;

  @Column()
  quantity: number;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column()
  delivery: string;

  @Column()
  payment: string;
 }