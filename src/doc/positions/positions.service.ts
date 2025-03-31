import { Injectable } from '@nestjs/common';
import { PositionEntity } from './position.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionsRepo: Repository<PositionEntity>,
  ) {}

  async findAll(): Promise<PositionEntity[]> {
    return this.positionsRepo.find({
      relations: ['document', 'account', 'post', 'positionDetail'],
    });
  }

  async findOne(id: string): Promise<PositionEntity | null> {
    return this.positionsRepo.findOne({
      where: { id },
      relations: ['document', 'account', 'post', 'positionDetail'],
    });
  }

  async create(position: PositionEntity): Promise<PositionEntity> {
    return this.positionsRepo.save(position);
  }

  async update(
    id: string,
    position: PositionEntity,
  ): Promise<PositionEntity | null> {
    await this.positionsRepo.update(id, position);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    this.positionsRepo.delete(id);
  }
}
