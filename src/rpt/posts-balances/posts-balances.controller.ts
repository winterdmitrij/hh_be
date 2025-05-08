import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsBalancesService } from './posts-balances.service';
import { CreatePostsBalanceDto } from './dto/create-posts-balance.dto';
import { UpdatePostsBalanceDto } from './dto/update-posts-balance.dto';

@Controller('posts-balances')
export class PostsBalancesController {
  constructor(private readonly postsBalancesService: PostsBalancesService) {}

  @Post()
  create(@Body() createPostsBalanceDto: CreatePostsBalanceDto) {
    return this.postsBalancesService.create(createPostsBalanceDto);
  }

  @Get()
  findAll() {
    return this.postsBalancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsBalancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostsBalanceDto: UpdatePostsBalanceDto) {
    return this.postsBalancesService.update(+id, updatePostsBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsBalancesService.remove(+id);
  }
}
