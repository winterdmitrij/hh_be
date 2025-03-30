import { Module } from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { PeriodsController } from './periods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodEntity } from './period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodEntity])],
  controllers: [PeriodsController],
  providers: [PeriodsService],
})
export class PeriodsModule {}
