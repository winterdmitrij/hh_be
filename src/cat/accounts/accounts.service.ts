import { Injectable } from '@nestjs/common';
import { AccountEntity } from './account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountsRepo: Repository<AccountEntity>,
  ) {}

  async findAll(): Promise<AccountEntity[]> {
    return this.accountsRepo.find({ relations: ['accountgroup'] });
  }

  async findOne(id: number): Promise<AccountEntity | null> {
    return this.accountsRepo.findOne({
      where: { id },
      relations: ['accountgroup'],
    });
  }

  async create(account: AccountEntity): Promise<AccountEntity> {
    return this.accountsRepo.save(account);
  }

  async update(
    id: number,
    account: Partial<AccountEntity>,
  ): Promise<AccountEntity | null> {
    await this.accountsRepo.update(id, account);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    //    await this.accountsRepo.delete(id);
  }
}
