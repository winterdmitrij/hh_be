import { Controller, Get, Param } from '@nestjs/common';
import { AccountsBalancesService } from './accounts-balances.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('accounts-balances')
@ApiTags('accounts-balances')
export class AccountsBalancesController {
  constructor(
    private readonly accountsBalancesService: AccountsBalancesService,
  ) {}

  @Get(':year')
  findAllBy(@Param('year') year: string) {
    return this.accountsBalancesService.findAllBy(+year);
  }
}
