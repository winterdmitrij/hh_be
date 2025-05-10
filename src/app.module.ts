import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './cat/accounts/accounts.module';
import { AccountgroupsModule } from './cat/accountgroups/accountgroups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountgroupEntity } from './cat/accountgroups/accountgroup.entity';
import { AccountEntity } from './cat/accounts/account.entity';
import { TransactionsModule } from './cat/transactions/transactions.module';
import { PostgroupsModule } from './cat/postgroups/postgroups.module';
import { PostsModule } from './cat/posts/posts.module';
import { TransactionEntity } from './cat/transactions/transaction.entity';
import { PostgroupEntity } from './cat/postgroups/postgroup.entity';
import { PostEntity } from './cat/posts/post.entity';
import { PeriodsModule } from './doc/periods/periods.module';
import { DocumentsModule } from './doc/documents/documents.module';
import { PositionsModule } from './doc/positions/positions.module';
import { PositionDetailsModule } from './doc/position-details/position-details.module';
import { PeriodEntity } from './doc/periods/period.entity';
import { DocumentEntity } from './doc/documents/document.entity';
import { PositionEntity } from './doc/positions/position.entity';
import { PositionDetailEntity } from './doc/position-details/position-detail.entity';
import { OperationsModule } from './grb/operations/operations.module';
import { InformationsModule } from './cat/informations/informations.module';
import { InformationEntity } from './cat/informations/information.entity';
import { OperationEntity } from './grb/operations/operation.entity';
import { MonthBalancesModule } from './home/month-balances/month-balances.module';
import { TransactionsDetailsModule } from './home/transactions-details/transactions-details.module';
import { PostsBalancesModule } from './rpt/posts-balances/posts-balances.module';
import { AccountsBalancesModule } from './rpt/accounts-balances/accounts-balances.module';
import { MonthBalanceEntity } from './home/month-balances/month-balance.entity';
import { TransactionsDetailEntity } from './home/transactions-details/transactions-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.178.20',
      port: 5432,
      username: 'dmitrij',
      password: '1234',
      database: 'haushalt',
      entities: [
        AccountgroupEntity,
        AccountEntity,
        TransactionEntity,
        PostgroupEntity,
        PostEntity,
        InformationEntity,
        PeriodEntity,
        DocumentEntity,
        PositionEntity,
        PositionDetailEntity,
        OperationEntity,
        MonthBalanceEntity,
        TransactionsDetailEntity,
      ],
      synchronize: false,
    }),
    AccountsModule,
    AccountgroupsModule,
    TransactionsModule,
    PostgroupsModule,
    PostsModule,
    InformationsModule,
    PeriodsModule,
    DocumentsModule,
    PositionsModule,
    PositionDetailsModule,
    OperationsModule,
    MonthBalancesModule,
    TransactionsDetailsModule,
    PostsBalancesModule,
    AccountsBalancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
