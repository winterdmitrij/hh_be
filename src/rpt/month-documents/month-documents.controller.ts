import { Controller, Get, Param } from '@nestjs/common';
import { MonthDocumentsService } from './month-documents.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('month-documents')
@ApiTags('month-documents')
export class MonthDocumentsController {
  constructor(private readonly monthDocumentsService: MonthDocumentsService) {}

  @Get(':prd')
  findAllBy(@Param('prd') prd: string) {
    return this.monthDocumentsService.findAllBy(prd);
  }
}
