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
      ],
      synchronize: false,
    }),
    AccountsModule,
    AccountgroupsModule,
    TransactionsModule,
    PostgroupsModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
