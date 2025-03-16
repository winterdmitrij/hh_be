import { Module } from '@nestjs/common';
import { AccountgroupsService } from './accountgroups.service';
import { AccountgroupsController } from './accountgroups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountgroupEntity } from './accountgroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountgroupEntity])],
  controllers: [AccountgroupsController],
  providers: [AccountgroupsService],
})
export class AccountgroupsModule {}
