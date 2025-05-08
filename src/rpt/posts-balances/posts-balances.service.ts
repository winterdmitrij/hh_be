import { Injectable } from '@nestjs/common';
import { CreatePostsBalanceDto } from './dto/create-posts-balance.dto';
import { UpdatePostsBalanceDto } from './dto/update-posts-balance.dto';

@Injectable()
export class PostsBalancesService {
  create(createPostsBalanceDto: CreatePostsBalanceDto) {
    return 'This action adds a new postsBalance';
  }

  findAll() {
    return `This action returns all postsBalances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postsBalance`;
  }

  update(id: number, updatePostsBalanceDto: UpdatePostsBalanceDto) {
    return `This action updates a #${id} postsBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} postsBalance`;
  }
}
