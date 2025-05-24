import { Controller, Get, Param } from '@nestjs/common';
import { PostsBalancesService } from './posts-balances.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts-balances')
@ApiTags('posts-balances')
export class PostsBalancesController {
  constructor(private readonly postsBalancesService: PostsBalancesService) {}

  @Get(':year')
  findAllBy(@Param('year') year: string) {
    return this.postsBalancesService.findAllBy(+year);
  }
}
