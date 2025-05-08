import { Controller, Get, Param } from '@nestjs/common';
import { MonthBalancesService } from './month-balances.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('month-balances')
@ApiTags('month-balances')
export class MonthBalancesController {
  constructor(private readonly monthBalancesService: MonthBalancesService) {}

  @Get(':prd')
  findOne(@Param('prd') prd: string) {
    return this.monthBalancesService.findAllBy(prd);
  }
}
