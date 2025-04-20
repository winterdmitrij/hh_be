import { Module } from '@nestjs/common';
import { InformationsService } from './informations.service';
import { InformationsController } from './informations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformationEntity } from './information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformationEntity])],
  controllers: [InformationsController],
  providers: [InformationsService],
})
export class InformationsModule {}
