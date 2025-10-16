import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/entiy/entity";
import { Materialentity } from "src/material/entities/material.entity";
import { Spareentity } from "src/spare/entities/spare.entity";


@Module({
 imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'uchena1064',
    database: 'material2',
  entities: [UserEntity, Materialentity, Spareentity],
  synchronize: true,
    })
 ],
 exports: [TypeOrmModule]
})

export class DatabaseModule {}