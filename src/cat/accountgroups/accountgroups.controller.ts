import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountgroupsService } from './accountgroups.service';
import { ApiTags } from '@nestjs/swagger';
import { AccountgroupEntity } from './accountgroup.entity';

@Controller('accountgroups')
@ApiTags('accountgroups')
export class AccountgroupsController {
  constructor(private readonly accountgroupsService: AccountgroupsService) {}

  @Get()
  findAll() {
    return this.accountgroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountgroupsService.findOne(+id);
  }

  @Post()
  create(@Body() accountgroup: AccountgroupEntity) {
    return this.accountgroupsService.create(accountgroup);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() accountgroup: Partial<AccountgroupEntity>,
  ) {
    return this.accountgroupsService.update(+id, accountgroup);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountgroupsService.remove(+id);
  }
}
