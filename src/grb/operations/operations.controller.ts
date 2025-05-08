import { Controller, Get, Param } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('operations')
@ApiTags('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Get()
  findAll() {
    return this.operationsService.findAll();
  }

  //ToDo: findBy(accId: string, prd: string, )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationsService.findOne(+id);
  }
}
