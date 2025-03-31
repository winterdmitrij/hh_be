import { Injectable } from '@nestjs/common';
import { PositionDetailEntity } from './position-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PositionDetailsService {
  constructor(
    @InjectRepository(PositionDetailEntity)
    private readonly positionDetailsRepo: Repository<PositionDetailEntity>,
  ) {}

  async findAll(): Promise<PositionDetailEntity[]> {
    return this.positionDetailsRepo.find();
  }

  async findOne(pos_id: string): Promise<PositionDetailEntity | null> {
    return this.positionDetailsRepo.findOne({
      where: { pos_id },
    });
  }

  async create(
    positionDetail: PositionDetailEntity,
  ): Promise<PositionDetailEntity> {
    return this.positionDetailsRepo.save(positionDetail);
  }

  async update(
    pos_id: string,
    positionDetail: PositionDetailEntity,
  ): Promise<PositionDetailEntity | null> {
    await this.positionDetailsRepo.update(pos_id, positionDetail);
    return this.findOne(pos_id);
  }

  async remove(pos_id: string): Promise<void> {
    this.positionDetailsRepo.delete(pos_id);
  }
}
