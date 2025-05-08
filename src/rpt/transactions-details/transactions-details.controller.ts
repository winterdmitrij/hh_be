import { Controller, Get, Query } from '@nestjs/common';
import { TransactionsDetailsService } from './transactions-details.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('transactions-details')
@ApiTags('transactions-details')
export class TransactionsDetailsController {
  constructor(
    private readonly transactionsDetailsService: TransactionsDetailsService,
  ) {}

  @Get()
  findAllBy(
    @Query('prd') prd: string,
    @Query('acc_id') acc_id: string,
    @Query('ta_dsg') ta_dsg: string,
  ) {
    return this.transactionsDetailsService.findAllBy(prd, +acc_id, ta_dsg);
  }
}
