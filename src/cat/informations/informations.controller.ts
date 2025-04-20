import { Controller, Get, Param } from '@nestjs/common';
import { InformationsService } from './informations.service';
import { ApiTags } from '@nestjs/swagger';
import { InformationEntity } from './information.entity';

@Controller('informations')
@ApiTags('informations')
export class InformationsController {
  constructor(private readonly informationsService: InformationsService) {}

  @Get()
  findAll(): Promise<InformationEntity[]> {
    return this.informationsService.findAll();
  }

  @Get(':typ')
  findOne(@Param('typ') typ: string): Promise<InformationEntity | null> {
    return this.informationsService.findOne(typ);
  }
}
