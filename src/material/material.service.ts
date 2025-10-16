import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materialentity } from './entities/material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialService {
constructor (@InjectRepository (Materialentity)
private materialRepository : Repository<Materialentity>){}


 //To create new material
async create(createMaterialDto: CreateMaterialDto) {
const material = await this.materialRepository.save(createMaterialDto);
    return {material, message: 'New material added'};
  }


  //Find all materials
  async findAll() {
  const material = await this.materialRepository.find();
    return { material, message: 'All materials found'};
  }
   

  //Find one material by id
  async findOne(id: string){
  const material = await this.materialRepository.findOne({where: {id: id}});
  if (!material) throw new NotFoundException ('Material not found');
   return { material, message: 'Material found successfully'};  
  }


   // To update one material by id
   async update(id: string, updateMaterialDto: UpdateMaterialDto) {
   const material = await this.materialRepository.update({id: id}, updateMaterialDto);
   if (!material) throw new NotFoundException ('Material not found');
   return {material, message: 'material updated successfully'}

   }

   // To Delete a material by id
   async Delete(id: string) {
   const mateial = await this.materialRepository.delete(id)
    return {mateial, message: 'material deleted successfully'};
  }
}
