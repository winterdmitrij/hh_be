import { Module } from '@nestjs/common';
import { AccountsBalancesService } from './accounts-balances.service';
import { AccountsBalancesController } from './accounts-balances.controller';

@Module({
  controllers: [AccountsBalancesController],
  providers: [AccountsBalancesService],
})
export class AccountsBalancesModule {}
