import { Test, TestingModule } from '@nestjs/testing';
import { AccountgroupsService } from './accountgroups.service';

describe('AccountgroupsService', () => {
  let service: AccountgroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountgroupsService],
    }).compile();

    service = module.get<AccountgroupsService>(AccountgroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
