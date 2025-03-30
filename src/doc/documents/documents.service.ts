import { Injectable } from '@nestjs/common';
import { DocumentEntity } from './document.entity';

@Injectable()
export class DocumentsService {
  findAll() {
    return `This action returns all documents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} document`;
  }

  create(createDocumentDto: DocumentEntity) {
    return 'This action adds a new document';
  }

  update(id: number, updateDocumentDto: DocumentEntity) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
