import { Module } from '@nestjs/common';
import { TransactionsDetailsService } from './transactions-details.service';
import { TransactionsDetailsController } from './transactions-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsDetailEntity } from './transactions-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionsDetailEntity])],
  controllers: [TransactionsDetailsController],
  providers: [TransactionsDetailsService],
})
export class TransactionsDetailsModule {}
