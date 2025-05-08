import { Test, TestingModule } from '@nestjs/testing';
import { PostsBalancesService } from './posts-balances.service';

describe('PostsBalancesService', () => {
  let service: PostsBalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsBalancesService],
    }).compile();

    service = module.get<PostsBalancesService>(PostsBalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
