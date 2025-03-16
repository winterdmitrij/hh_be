import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountgroupEntity } from './accountgroup.entity';

@Injectable()
export class AccountgroupsService {
  constructor(
    @InjectRepository(AccountgroupEntity)
    private readonly accountgroupsRepo: Repository<AccountgroupEntity>,
  ) {}

  async findAll(): Promise<AccountgroupEntity[]> {
    return this.accountgroupsRepo.find({ relations: ['accounts'] });
  }

  async findOne(id: number): Promise<AccountgroupEntity | null> {
    return this.accountgroupsRepo.findOne({
      where: { id },
      relations: ['accounts'],
    });
  }

  async create(accountgroup: AccountgroupEntity): Promise<AccountgroupEntity> {
    return this.accountgroupsRepo.save(accountgroup);
  }

  async update(
    id: number,
    accountgroup: Partial<AccountgroupEntity>,
  ): Promise<AccountgroupEntity | null> {
    await this.accountgroupsRepo.update(id, accountgroup);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    //    await this.accountgroupsRepo.delete(id);
  }
}
