import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accountgroup } from './accountgroup.entity';

@Injectable()
export class AccountgroupsService {
  constructor(
    @InjectRepository(Accountgroup)
    private readonly accountgroupsRepo: Repository<Accountgroup>,
  ) {}

  async findAll(): Promise<Accountgroup[]> {
    return this.accountgroupsRepo.find({ relations: ['accounts'] });
  }

  async findOne(id: number): Promise<Accountgroup | null> {
    return this.accountgroupsRepo.findOne({
      where: { id },
      relations: ['accounts'],
    });
  }

  async create(accountgroup: Accountgroup): Promise<Accountgroup> {
    return this.accountgroupsRepo.save(accountgroup);
  }

  async update(
    id: number,
    accountgroup: Partial<Accountgroup>,
  ): Promise<Accountgroup | null> {
    await this.accountgroupsRepo.update(id, accountgroup);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    //    await this.accountgroupsRepo.delete(id);
  }
}
