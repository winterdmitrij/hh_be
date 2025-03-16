import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
