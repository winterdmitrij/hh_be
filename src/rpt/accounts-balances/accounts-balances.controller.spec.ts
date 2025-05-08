import { Test, TestingModule } from '@nestjs/testing';
import { AccountsBalancesController } from './accounts-balances.controller';
import { AccountsBalancesService } from './accounts-balances.service';

describe('AccountsBalancesController', () => {
  let controller: AccountsBalancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsBalancesController],
      providers: [AccountsBalancesService],
    }).compile();

    controller = module.get<AccountsBalancesController>(AccountsBalancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
