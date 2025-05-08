import { PartialType } from '@nestjs/swagger';
import { CreatePostsBalanceDto } from './create-posts-balance.dto';

export class UpdatePostsBalanceDto extends PartialType(CreatePostsBalanceDto) {}
