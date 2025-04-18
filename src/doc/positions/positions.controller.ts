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
import { ApiTags } from '@nestjs/swagger';

@Controller('positions')
@ApiTags('positions')
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
  async create(@Body() position: PositionEntity) {
    try {
      const savedPosition = await this.positionsService.create(position);
      console.log('Position erfolgreich gespeichert:', savedPosition);
      return savedPosition;
    } catch (error) {
      console.error('Fehler beim Speichern der Position:', error);
      throw new Error('Fehler beim Speichern der Position');
    }
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
