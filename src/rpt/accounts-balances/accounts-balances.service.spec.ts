import { Test, TestingModule } from '@nestjs/testing';
import { AccountsBalancesService } from './accounts-balances.service';

describe('AccountsBalancesService', () => {
  let service: AccountsBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsBalancesService],
    }).compile();

    service = module.get<AccountsBalancesService>(AccountsBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
