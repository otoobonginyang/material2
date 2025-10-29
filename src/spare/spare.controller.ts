import { Controller, Get, Post, Body, Patch, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { SpareService } from './spare.service';
import { CreateSpareDto } from './dto/create-spare.dto';
import { UpdateSpareDto } from './dto/update-spare.dto';
import { UpdatePriceDto } from './dto/update-price.dto';

  @Controller('spare')
  export class SpareController {
  constructor(private readonly spareService: SpareService) {}

  @Post()
   async create(@Body() createSpareDto: CreateSpareDto) {
   return this.spareService.create(createSpareDto);
   }

    @Get()
    async findAll() {
    return this.spareService.findAll();
    }

   @Get(':id')
   async findOne(@Param('id') id: string) {
   return this.spareService.findOne(id);
   }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateSpareDto:UpdateSpareDto) {
    return this.spareService.update(id, updateSpareDto);
    }

    @Put('price/:id')
    async updatePrice(@Param('id') id: string,
    @Body() updatePriceDto: UpdatePriceDto,){

    //Only allow price in the body
      const allowedFields = ['price'];
      const extraFields: string[] = Object.keys(updatePriceDto).filter(
      (field) => !allowedFields.includes(field),
     );

      if (extraFields.length > 0) {
      throw new BadRequestException(`Invalid fields`);
     }

      //Validate price existence
      if (updatePriceDto.price === undefined) {
      throw new BadRequestException('Price field is required');
     }

     return this.spareService.updatePrice(id, updatePriceDto.price);
    }

 
    @Delete(':id')
    async Delete (@Param('id') id: string){ 
    return this.spareService.Delete(id);
    }

}
