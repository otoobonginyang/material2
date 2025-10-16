import { Base } from "src/entiy/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UserEntity extends Base {

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;


  @Column({ type: 'bigint' })
  phonenumber: number;

  @Column()
  DOB: string;


  @Column()
  gender: string


  @Column()
  city: string

}
