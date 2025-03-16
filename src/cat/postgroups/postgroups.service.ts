import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostgroupEntity } from './postgroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostgroupsService {
  constructor(
    @InjectRepository(PostgroupEntity)
    private readonly postgroupsRepo: Repository<PostgroupEntity>,
  ) {}

  async findAll(): Promise<PostgroupEntity[]> {
    return this.postgroupsRepo.find({ relations: ['transaction', 'posts'] });
  }

  async findOne(id: number): Promise<PostgroupEntity | null> {
    return this.postgroupsRepo.findOne({
      where: { id },
      relations: ['transaction', 'posts'],
    });
  }

  async create(postgroup: PostgroupEntity): Promise<PostgroupEntity> {
    return this.postgroupsRepo.save(postgroup);
  }

  async update(
    id: number,
    postgroup: Partial<PostgroupEntity>,
  ): Promise<PostgroupEntity | null> {
    await this.postgroupsRepo.update(id, postgroup);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.postgroupsRepo.delete(id);
  }
}
