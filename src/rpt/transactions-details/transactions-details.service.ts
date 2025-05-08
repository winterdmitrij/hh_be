import { Injectable } from '@nestjs/common';
import { TransactionsDetailEntity } from './transactions-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsDetailsService {
  constructor(
    @InjectRepository(TransactionsDetailEntity)
    private readonly transactionsDetailsRepo: Repository<TransactionsDetailEntity>,
  ) {}

  async findAllBy(
    prd: string,
    acc_id: number,
    ta_dsg: string,
  ): Promise<TransactionsDetailEntity[]> {
    const query = this.transactionsDetailsRepo
      .createQueryBuilder('td')
      .where('td.prd = :prd', { prd })
      .andWhere('td.ta_dsg = :ta_dsg', { ta_dsg });
    if (acc_id % 100 === 0) {
      query.andWhere('td.acc_id BETWEEN :start AND :end', {
        start: acc_id,
        end: acc_id + 99,
      });
    } else {
      query.andWhere('td.acc_id IN (:...accIds)', {
        accIds: [acc_id, acc_id * 10],
      });
    }

    console.log(query.getSql());
    console.log(query.getParameters());

    return query.getMany();
  }
}
