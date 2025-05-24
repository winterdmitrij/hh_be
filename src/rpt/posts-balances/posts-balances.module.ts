import { Module } from '@nestjs/common';
import { PostsBalancesService } from './posts-balances.service';
import { PostsBalancesController } from './posts-balances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsBalanceEntity } from './posts-balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostsBalanceEntity])],
  controllers: [PostsBalancesController],
  providers: [PostsBalancesService],
})
export class PostsBalancesModule {}
