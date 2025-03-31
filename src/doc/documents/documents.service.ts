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
      relations: ['positions'],
    });
  }

  async create(document: DocumentEntity): Promise<DocumentEntity> {
    return this.documentsRepo.save(document);
  }

  async update(
    id: string,
    document: DocumentEntity,
  ): Promise<DocumentEntity | null> {
    await this.documentsRepo.update(id, document);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    // this.documentsRepo.delete(id);
  }
}
