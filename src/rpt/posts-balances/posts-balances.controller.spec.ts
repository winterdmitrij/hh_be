import { Test, TestingModule } from '@nestjs/testing';
import { PostsBalancesController } from './posts-balances.controller';
import { PostsBalancesService } from './posts-balances.service';

describe('PostsBalancesController', () => {
  let controller: PostsBalancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsBalancesController],
      providers: [PostsBalancesService],
    }).compile();

    controller = module.get<PostsBalancesController>(PostsBalancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
