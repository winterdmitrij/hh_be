import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './cat/accounts/accounts.module';
import { AccountgroupsModule } from './cat/accountgroups/accountgroups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accountgroup } from './cat/accountgroups/accountgroup.entity';
import { Account } from './cat/accounts/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.178.20',
      port: 5432,
      username: 'dmitrij',
      password: '1234',
      database: 'haushalt',
      entities: [Accountgroup, Account],
      synchronize: false,
    }),
    AccountsModule,
    AccountgroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
