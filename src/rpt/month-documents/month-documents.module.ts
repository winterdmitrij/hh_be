import { Module } from '@nestjs/common';
import { MonthDocumentsService } from './month-documents.service';
import { MonthDocumentsController } from './month-documents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthDocumentEntity } from './month-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MonthDocumentEntity])],
  controllers: [MonthDocumentsController],
  providers: [MonthDocumentsService],
})
export class MonthDocumentsModule {}
