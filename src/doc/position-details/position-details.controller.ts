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

  @Get(':pos_id')
  findOne(@Param('pos_id') pos_id: string) {
    return this.positionDetailsService.findOne(pos_id);
  }

  @Post()
  create(@Body() positionDetail: PositionDetailEntity) {
    return this.positionDetailsService.create(positionDetail);
  }

  @Patch(':pos_id')
  update(
    @Param('pos_id') pos_id: string,
    @Body() positionDetail: PositionDetailEntity,
  ) {
    return this.positionDetailsService.update(pos_id, positionDetail);
  }

  @Delete(':pos_id')
  remove(@Param('pos_id') pos_id: string) {
    return this.positionDetailsService.remove(pos_id);
  }
}
