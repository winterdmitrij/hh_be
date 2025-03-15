import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestgroupsService } from './testgroups.service';
import { CreateTestgroupDto } from './dto/create-testgroup.dto';
import { UpdateTestgroupDto } from './dto/update-testgroup.dto';
import { Testgroup } from './entities/testgroup.entity';

@Controller('testgroups')
export class TestgroupsController {
  constructor(private readonly testgroupsService: TestgroupsService) {}

  @Get()
  findAll() {
    return this.testgroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testgroupsService.findOne(+id);
  }

  @Post()
  create(@Body() testgroup: Testgroup) {
    return this.testgroupsService.create(testgroup);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() testgroup: Partial<Testgroup>) {
    return this.testgroupsService.update(+id, testgroup);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testgroupsService.remove(+id);
  }
}
