import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountsBalanceEntity } from './accounts-balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsBalancesService {
  constructor(
    @InjectRepository(AccountsBalanceEntity)
    private readonly accountsBalancesRepo: Repository<AccountsBalanceEntity>,
  ) {}

  async findAllBy(year: number): Promise<AccountsBalanceEntity[]> {
    return this.accountsBalancesRepo.find({
      where: { year },
      order: { acc_id: 'ASC' },
    });
  }
}
