import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpareService } from './spare.service';
import { CreateSpareDto } from './dto/create-spare.dto';
import { UpdateSpareDto } from './dto/update-spare.dto';

@Controller('spare')
export class SpareController {
  constructor(private readonly spareService: SpareService) {}

  @Post()
  create(@Body() createSpareDto: CreateSpareDto) {
    return this.spareService.create(createSpareDto);
  }

  @Get()
  findAll() {
    return this.spareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spareService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpareDto: UpdateSpareDto) {
    return this.spareService.update(id, updateSpareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spareService.Delete(id);
  }
}
