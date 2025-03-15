import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  create(@Body() test: Test) {
    return this.testsService.create(test);
  }

  @Get()
  findAll(): Promise<Test[]> {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.testsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() test: Test) {
    return this.testsService.update(+id, test);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsService.remove(+id);
  }
}
