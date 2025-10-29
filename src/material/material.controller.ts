import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialService.create(createMaterialDto);
  }

   @Get()
   async findAll() {
    return this.materialService.findAll();
  }

   @Get(':id')
   async findOne(@Param('id') id: string) {
    return this.materialService.findOne(id);
  }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateMaterialDto: UpdateMaterialDto) {
    return this.materialService.update(id, updateMaterialDto);
  }

   @Delete(':id')
   async remove(@Param('id') id: string) {
    return this.materialService.Delete(id);
  }
}
