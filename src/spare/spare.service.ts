import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpareDto } from './dto/create-spare.dto';
import { UpdateSpareDto } from './dto/update-spare.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spareentity } from './entities/spare.entity';

@Injectable()
export class SpareService {
constructor (@InjectRepository (Spareentity)
private spareRepository : Repository<Spareentity>){}

  
  //To create new spare part
  async create(createSpareDto: CreateSpareDto) {
  const spare = await this.spareRepository.save(createSpareDto);
  //const savedspare = await spare.createSpareDto;
    return {spare, message: 'Spare Part(s) Ordered successfully'};
  }



   //Find all Spare parts
  async findAll() {
  const spare = await this.spareRepository.find();
  return {spare, message: 'All spare parts found successfully'};
  }
   
  //Find one Spare by id
  async findOne(id: string) {
  const spare = await this.spareRepository.findOne({where: {id: id}});
  if (!spare) throw new NotFoundException ('Spare part not found');
    return { spare, message: 'Spare part found successfully'};
  }
    

    //Update Spare part
  async update(id: string, updateSpareDto: UpdateSpareDto) {
  const spare = await this.spareRepository.update({id: id}, updateSpareDto);
  if (!spare) throw new NotFoundException ('Spare part not found');
  return { spare, message: 'Spare part updated Successfully'};
 }

 
 //Delete spare parts by id
  async Delete(id: string,){
  const spare = await this.spareRepository.delete(id);
  if (!spare) throw new NotFoundException ('spare part not found');
  return {spare, message: 'Spare part deleted'}
  }
}
