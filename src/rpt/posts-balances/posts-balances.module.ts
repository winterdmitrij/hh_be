import { Module } from '@nestjs/common';
import { PostsBalancesService } from './posts-balances.service';
import { PostsBalancesController } from './posts-balances.controller';

@Module({
  controllers: [PostsBalancesController],
  providers: [PostsBalancesService],
})
export class PostsBalancesModule {}
