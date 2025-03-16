import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostgroupsService } from './postgroups.service';
import { ApiTags } from '@nestjs/swagger';
import { PostgroupEntity } from './postgroup.entity';

@Controller('postgroups')
@ApiTags('postgroups')
export class PostgroupsController {
  constructor(private readonly postgroupsService: PostgroupsService) {}

  @Get()
  findAll() {
    return this.postgroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postgroupsService.findOne(+id);
  }

  @Post()
  create(@Body() postgroup: PostgroupEntity) {
    return this.postgroupsService.create(postgroup);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() postgroup: Partial<PostgroupEntity>) {
    return this.postgroupsService.update(+id, postgroup);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postgroupsService.remove(+id);
  }
}
