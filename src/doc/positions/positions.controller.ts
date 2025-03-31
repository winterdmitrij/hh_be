import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionEntity } from './position.entity';

@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Get()
  findAll() {
    return this.positionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionsService.findOne(id);
  }

  @Post()
  create(@Body() position: PositionEntity) {
    return this.positionsService.create(position);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() position: PositionEntity) {
    return this.positionsService.update(id, position);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionsService.remove(id);
  }
}
