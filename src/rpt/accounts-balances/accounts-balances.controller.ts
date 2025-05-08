import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsBalancesService } from './accounts-balances.service';
import { CreateAccountsBalanceDto } from './dto/create-accounts-balance.dto';
import { UpdateAccountsBalanceDto } from './dto/update-accounts-balance.dto';

@Controller('accounts-balances')
export class AccountsBalancesController {
  constructor(private readonly accountsBalancesService: AccountsBalancesService) {}

  @Post()
  create(@Body() createAccountsBalanceDto: CreateAccountsBalanceDto) {
    return this.accountsBalancesService.create(createAccountsBalanceDto);
  }

  @Get()
  findAll() {
    return this.accountsBalancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsBalancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountsBalanceDto: UpdateAccountsBalanceDto) {
    return this.accountsBalancesService.update(+id, updateAccountsBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsBalancesService.remove(+id);
  }
}
