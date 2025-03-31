import { Controller, Get, Param } from '@nestjs/common';
import { OperationsService } from './operations.service';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Get()
  findAll() {
    return this.operationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationsService.findOne(+id);
  }
}
