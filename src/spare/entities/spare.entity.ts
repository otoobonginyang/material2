import { Base } from "src/entiy/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Spareentity extends Base {
  @Column()
  type: string;

  @Column()
  size: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  delivery: string;

  @Column()
  payment: string;

  
}