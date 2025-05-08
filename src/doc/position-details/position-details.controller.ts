import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException
} from '@nestjs/common';
import { PositionDetailsService } from './position-details.service';
import { PositionDetailEntity } from './position-detail.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('position-details')
@ApiTags('position-details')
export class PositionDetailsController {
  constructor(
    private readonly positionDetailsService: PositionDetailsService,
  ) {}

  @Get()
  findAll() {
    return this.positionDetailsService.findAll();
  }

  @Get(':pos_id')
  async findOne(@Param('pos_id') pos_id: string) {
    const detail = await this.positionDetailsService.findOne(pos_id);

    if (!detail) {
      throw new NotFoundException(`PositionDetail mit ID ${pos_id} nicht gefunden`);
    }
    return detail;
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
