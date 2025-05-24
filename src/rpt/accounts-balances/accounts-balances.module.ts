import { Module } from '@nestjs/common';
import { AccountsBalancesService } from './accounts-balances.service';
import { AccountsBalancesController } from './accounts-balances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsBalanceEntity } from './accounts-balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountsBalanceEntity])],
  controllers: [AccountsBalancesController],
  providers: [AccountsBalancesService],
})
export class AccountsBalancesModule {}
