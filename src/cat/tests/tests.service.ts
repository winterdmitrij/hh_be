import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestsService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepo: Repository<Test>,
  ) {}

  async findAll(): Promise<Test[]> {
    return this.testRepo.find({ relations: ['testgroup'] });
  }

  async findOne(id: number): Promise<Test | null> {
    return this.testRepo.findOne({ where: { id }, relations: ['testgroup'] });
  }

  async create(test: Test): Promise<Test> {
    return this.testRepo.save(test);
  }

  async update(id: number, test: Partial<Test>): Promise<Test | null> {
    await this.testRepo.update(id, test);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.testRepo.delete(id);
  }
}
