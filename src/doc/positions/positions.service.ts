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

  findAll() {
    return `This action returns all positions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  create(createPositionDto: PositionEntity) {
    return 'This action adds a new position';
  }

  update(id: number, updatePositionDto: PositionEntity) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
