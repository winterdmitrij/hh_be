import { Injectable } from '@nestjs/common';
import { DocumentEntity } from './document.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity)
    private readonly documentsRepo: Repository<DocumentEntity>,
  ) {}

  async findAll(): Promise<DocumentEntity[]> {
    return this.documentsRepo.find({ relations: ['positions'] });
  }

  async findOne(id: string): Promise<DocumentEntity | null> {
    return this.documentsRepo.findOne({
      where: { id },
      relations: ['positions',
'positions.account',
'positions.post'
],
    });
  }

  async create(document: DocumentEntity): Promise<DocumentEntity> {
    return this.documentsRepo.save(document);
  }

// ToDo: document: DocumentEntity -> updateData: Partial<DocumentEntity>
  async update(
    id: string,
    document: DocumentEntity,
  ): Promise<DocumentEntity | null> {
    await this.documentsRepo.update(id, document);
    return this.findOne(id);
  }

/*
async update(id: string, updateData: Partial<DocumentEntity>): Promise<DocumentEntity> {
  const doc = await this.documentRepo.findOne({ where: { id } });
  if (!doc) {
    throw new NotFoundException('Dokument nicht gefunden');
  }

  Object.assign(doc, updateData); // Nur die übergebenen Felder aktualisieren

  return this.documentRepo.save(doc);
}
*/

  async remove(id: string): Promise<void> {
    // this.documentsRepo.delete(id);
  }
}
