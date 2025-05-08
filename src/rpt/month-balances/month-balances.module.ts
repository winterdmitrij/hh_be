import { Module } from '@nestjs/common';
import { MonthBalancesService } from './month-balances.service';
import { MonthBalancesController } from './month-balances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthBalanceEntity } from './month-balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MonthBalanceEntity])],
  controllers: [MonthBalancesController],
  providers: [MonthBalancesService],
})
export class MonthBalancesModule {}
