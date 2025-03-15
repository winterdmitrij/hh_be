import { Test, TestingModule } from '@nestjs/testing';
import { AccountgroupsController } from './accountgroups.controller';
import { AccountgroupsService } from './accountgroups.service';

describe('AccountgroupsController', () => {
  let controller: AccountgroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountgroupsController],
      providers: [AccountgroupsService],
    }).compile();

    controller = module.get<AccountgroupsController>(AccountgroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
