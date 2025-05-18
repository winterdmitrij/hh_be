import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MonthDocumentEntity } from './month-document.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MonthDocumentsService {
  constructor(
    @InjectRepository(MonthDocumentEntity)
    private readonly monthDocumentsRepo: Repository<MonthDocumentEntity>,
  ) {}

  async findAllBy(prd: string): Promise<MonthDocumentEntity[]> {
    return this.monthDocumentsRepo.find({ where: { prd } });
  }
}
