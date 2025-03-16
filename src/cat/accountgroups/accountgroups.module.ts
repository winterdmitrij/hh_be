import { Module } from '@nestjs/common';
import { AccountgroupsService } from './accountgroups.service';
import { AccountgroupsController } from './accountgroups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accountgroup } from './accountgroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accountgroup])],
  controllers: [AccountgroupsController],
  providers: [AccountgroupsService],
})
export class AccountgroupsModule {}
