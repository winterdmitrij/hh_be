import { Injectable } from '@nestjs/common';
import { Account } from './account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountsRepo: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountsRepo.find({ relations: ['accountgroup'] });
  }

  async findOne(id: number): Promise<Account | null> {
    return this.accountsRepo.findOne({
      where: { id },
      relations: ['accountgroup'],
    });
  }

  async create(account: Account): Promise<Account> {
    return this.accountsRepo.save(account);
  }

  async update(id: number, account: Partial<Account>): Promise<Account | null> {
    await this.accountsRepo.update(id, account);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    //    await this.accountsRepo.delete(id);
  }
}
