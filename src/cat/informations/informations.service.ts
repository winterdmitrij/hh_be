import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InformationEntity } from './information.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InformationsService {
  constructor(
    @InjectRepository(InformationEntity)
    private readonly informationRepo: Repository<InformationEntity>,
  ) {}

  async findAll(): Promise<InformationEntity[]> {
    return this.informationRepo.find({
      relations: ['account', 'transaction'],
    });
  }

  async findOne(typ: string): Promise<InformationEntity | null> {
    return this.informationRepo.findOne({
      where: { typ },
      relations: ['account', 'transaction'],
    });
  }
}
