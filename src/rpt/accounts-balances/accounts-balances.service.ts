import { Injectable } from '@nestjs/common';
import { CreateAccountsBalanceDto } from './dto/create-accounts-balance.dto';
import { UpdateAccountsBalanceDto } from './dto/update-accounts-balance.dto';

@Injectable()
export class AccountsBalancesService {
  create(createAccountsBalanceDto: CreateAccountsBalanceDto) {
    return 'This action adds a new accountsBalance';
  }

  findAll() {
    return `This action returns all accountsBalances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountsBalance`;
  }

  update(id: number, updateAccountsBalanceDto: UpdateAccountsBalanceDto) {
    return `This action updates a #${id} accountsBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountsBalance`;
  }
}
