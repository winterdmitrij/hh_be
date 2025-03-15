import { Injectable } from '@nestjs/common';
import { CreateTestgroupDto } from './dto/create-testgroup.dto';
import { UpdateTestgroupDto } from './dto/update-testgroup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Testgroup } from './entities/testgroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestgroupsService {
  constructor(
    @InjectRepository(Testgroup)
    private readonly tgRepo: Repository<Testgroup>,
  ) {}

  async findAll(): Promise<Testgroup[]> {
    return this.tgRepo.find({ relations: ['tests'] });
  }

  async findOne(id: number): Promise<Testgroup | null> {
    return this.tgRepo.findOne({ where: { id }, relations: ['tests'] });
  }

  async create(testgroup: Testgroup): Promise<Testgroup> {
    return this.tgRepo.save(testgroup);
  }

  async update(
    id: number,
    testgroup: Partial<Testgroup>,
  ): Promise<Testgroup | null> {
    await this.tgRepo.update(id, testgroup);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tgRepo.delete(id);
  }
}
