import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './cat/accounts/accounts.module';
import { AccountgroupsModule } from './cat/accountgroups/accountgroups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './cat/accounts/entities/account.entity';
import { TestgroupsModule } from './cat/testgroups/testgroups.module';
import { TestsModule } from './cat/tests/tests.module';
import { Testgroup } from './cat/testgroups/entities/testgroup.entity';
import { Test } from './cat/tests/entities/test.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.178.20',
      port: 5432,
      username: 'dmitrij',
      password: '1234',
      database: 'haushalt',
      entities: [Test, Testgroup],
      synchronize: false,
    }),
    AccountsModule,
    AccountgroupsModule,
    TestgroupsModule,
    TestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
