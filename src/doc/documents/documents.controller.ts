import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentEntity } from './document.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('documents')
@ApiTags('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  findAll() {
    return this.documentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @Post()
  create(@Body() document: DocumentEntity) {
    return this.documentsService.create(document);
  }

// ToDo: document: DocumentEntity -> document: Partial<DocumentEntity>
  @Patch(':id')
  update(@Param('id') id: string, @Body() document: DocumentEntity) {
    return this.documentsService.update(id, document);
  }
  /*
@Patch(':id')
update(@Param('id') id: string, @Body() document: Partial<DocumentEntity>) {
  return this.documentsService.update(id, document);
}
  */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
