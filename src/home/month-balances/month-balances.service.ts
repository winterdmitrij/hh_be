import { Injectable } from '@nestjs/common';
import { MonthBalanceEntity } from './month-balance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MonthBalancesService {
  constructor(
    @InjectRepository(MonthBalanceEntity)
    private readonly monthBalancesRepo: Repository<MonthBalanceEntity>,
  ) {}

  async findAllBy(prd: string): Promise<MonthBalanceEntity[]> {
    return this.monthBalancesRepo.find({
      where: { prd },
    });
  }
}
