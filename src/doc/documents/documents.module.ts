import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentEntity } from './document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentEntity])],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
