import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PositionDetailsService } from './position-details.service';
import { PositionDetailEntity } from './position-detail.entity';

@Controller('position-details')
export class PositionDetailsController {
  constructor(
    private readonly positionDetailsService: PositionDetailsService,
  ) {}

  @Get()
  findAll() {
    return this.positionDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionDetailsService.findOne(+id);
  }

  @Post()
  create(@Body() createPositionDetailDto: PositionDetailEntity) {
    return this.positionDetailsService.create(createPositionDetailDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePositionDetailDto: PositionDetailEntity,
  ) {
    return this.positionDetailsService.update(+id, updatePositionDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionDetailsService.remove(+id);
  }
}
