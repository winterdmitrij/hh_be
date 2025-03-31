import { Injectable } from '@nestjs/common';

@Injectable()
export class OperationsService {
  findAll() {
    return `This action returns all operations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operation`;
  }
}
