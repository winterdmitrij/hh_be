import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsBalanceEntity } from './posts-balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsBalancesService {
  constructor(
    @InjectRepository(PostsBalanceEntity)
    private readonly postsBalancesRepo: Repository<PostsBalanceEntity>,
  ) {}

  findAllBy(year: number) {
    return this.postsBalancesRepo.find({
      where: { year },
    });
  }
}
