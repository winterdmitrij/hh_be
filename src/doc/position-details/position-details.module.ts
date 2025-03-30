import { Module } from '@nestjs/common';
import { PositionDetailsService } from './position-details.service';
import { PositionDetailsController } from './position-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionDetailEntity } from './position-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PositionDetailEntity])],
  controllers: [PositionDetailsController],
  providers: [PositionDetailsService],
})
export class PositionDetailsModule {}
