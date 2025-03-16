import { Injectable } from '@nestjs/common';
import { TransactionEntity } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionsRepo: Repository<TransactionEntity>,
  ) {}

  async findAll(): Promise<TransactionEntity[]> {
    return this.transactionsRepo.find({ relations: ['postgroups'] });
  }

  async findOne(id: number): Promise<TransactionEntity | null> {
    return this.transactionsRepo.findOne({
      where: { id },
      relations: ['postgroups'],
    });
  }
}
