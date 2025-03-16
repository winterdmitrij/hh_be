import { Module } from '@nestjs/common';
import { PostgroupsService } from './postgroups.service';
import { PostgroupsController } from './postgroups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgroupEntity } from './postgroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostgroupEntity])],
  controllers: [PostgroupsController],
  providers: [PostgroupsService],
})
export class PostgroupsModule {}
