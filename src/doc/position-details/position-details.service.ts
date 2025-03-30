import { Injectable } from '@nestjs/common';
import { PositionDetailEntity } from './position-detail.entity';

@Injectable()
export class PositionDetailsService {
  findAll() {
    return `This action returns all positionDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} positionDetail`;
  }

  create(createPositionDetailDto: PositionDetailEntity) {
    return 'This action adds a new positionDetail';
  }

  update(id: number, updatePositionDetailDto: PositionDetailEntity) {
    return `This action updates a #${id} positionDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} positionDetail`;
  }
}
