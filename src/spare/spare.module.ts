import { Module } from '@nestjs/common';
import { SpareService } from './spare.service';
import { SpareController } from './spare.controller';
import { Spareentity } from './entities/spare.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([Spareentity])],
  controllers: [SpareController],
  providers: [SpareService],
})
export class SpareModule {}
