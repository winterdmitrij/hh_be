import { Module } from '@nestjs/common';
import { AccountgroupsService } from './accountgroups.service';
import { AccountgroupsController } from './accountgroups.controller';

@Module({
  controllers: [AccountgroupsController],
  providers: [AccountgroupsService],
})
export class AccountgroupsModule {}
