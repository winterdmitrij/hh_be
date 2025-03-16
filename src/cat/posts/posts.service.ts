import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepo: Repository<PostEntity>,
  ) {}

  async findAll(): Promise<PostEntity[]> {
    return this.postsRepo.find({ relations: ['postgroup'] });
  }

  async findOne(id: number): Promise<PostEntity | null> {
    return this.postsRepo.findOne({
      where: { id },
      relations: ['postgroup'],
    });
  }

  async create(post: PostEntity): Promise<PostEntity> {
    return this.postsRepo.save(post);
  }

  async update(
    id: number,
    post: Partial<PostEntity>,
  ): Promise<PostEntity | null> {
    await this.postsRepo.update(id, post);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.postsRepo.delete(id);
  }
}
