import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { PeriodEntity } from './period.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('periods')
@ApiTags('periods')
export class PeriodsController {
  constructor(private readonly periodsService: PeriodsService) {}

  @Get()
  findAll() {
    return this.periodsService.findAll();
  }

  @Get(':prd')
  findOne(@Param('prd') prd: string) {
    return this.periodsService.findOne(prd);
  }

  @Post()
  create(@Body() period: PeriodEntity) {
    return this.periodsService.create(period);
  }

  @Patch(':prd')
  update(@Param('prd') prd: string, @Body() period: PeriodEntity) {
    return this.periodsService.update(prd, period);
  }

  @Delete(':prd')
  remove(@Param('prd') prd: string) {
    return this.periodsService.remove(prd);
  }
}
