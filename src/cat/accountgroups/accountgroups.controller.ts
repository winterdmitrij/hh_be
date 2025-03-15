import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountgroupsService } from './accountgroups.service';
import { CreateAccountgroupDto } from './dto/create-accountgroup.dto';
import { UpdateAccountgroupDto } from './dto/update-accountgroup.dto';

@Controller('accountgroups')
export class AccountgroupsController {
  constructor(private readonly accountgroupsService: AccountgroupsService) {}

  @Post()
  create(@Body() createAccountgroupDto: CreateAccountgroupDto) {
    return this.accountgroupsService.create(createAccountgroupDto);
  }

  @Get()
  findAll() {
    return this.accountgroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountgroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountgroupDto: UpdateAccountgroupDto) {
    return this.accountgroupsService.update(+id, updateAccountgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountgroupsService.remove(+id);
  }
}
