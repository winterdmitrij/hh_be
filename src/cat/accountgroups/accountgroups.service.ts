import { Injectable } from '@nestjs/common';
import { CreateAccountgroupDto } from './dto/create-accountgroup.dto';
import { UpdateAccountgroupDto } from './dto/update-accountgroup.dto';

@Injectable()
export class AccountgroupsService {
  create(createAccountgroupDto: CreateAccountgroupDto) {
    return 'This action adds a new accountgroup';
  }

  findAll() {
    return `This action returns all accountgroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountgroup`;
  }

  update(id: number, updateAccountgroupDto: UpdateAccountgroupDto) {
    return `This action updates a #${id} accountgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountgroup`;
  }
}
