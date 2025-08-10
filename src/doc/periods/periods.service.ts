import { Injectable } from '@nestjs/common';
import { PeriodEntity } from './period.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PeriodsService {
  constructor(
    @InjectRepository(PeriodEntity)
    private readonly periodsRepo: Repository<PeriodEntity>,
  ) {}

  async findAll(): Promise<PeriodEntity[]> {
    return this.periodsRepo.find({ order: { prd: 'DESC' } });
  }

  async findAllYears(): Promise<number[]> {
    const years = await this.periodsRepo
      .createQueryBuilder('p')
      .select('DISTINCT p.year', 'year')
      .orderBy('p.year', 'DESC')
      .getRawMany();

    // getRawMany liefert [{ year: 2025 }, { year: 2024 }, ...]
    return years.map((y) => Number(y.year));
  }

  async update(
    prd: string,
    period: PeriodEntity,
  ): Promise<PeriodEntity | null> {
    await this.periodsRepo.update(prd, period);
    return this.findOne(prd);
  }

  //?
  async findOne(prd: string): Promise<PeriodEntity | null> {
    return this.periodsRepo.findOne({
      where: { prd },
    });
  }

  //ToDo: Brauche ich nicht - löschen
  async create(period: PeriodEntity): Promise<PeriodEntity> {
    return this.periodsRepo.save(period);
  }
  //ToDo: Brauche ich nicht - löschen
  async remove(prd: string): Promise<void> {
    //await this.periodsRepo.delete(prd);
  }
}
