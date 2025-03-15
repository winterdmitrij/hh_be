import { Module } from '@nestjs/common';
import { TestgroupsService } from './testgroups.service';
import { TestgroupsController } from './testgroups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testgroup } from './entities/testgroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testgroup])],
  controllers: [TestgroupsController],
  providers: [TestgroupsService],
})
export class TestgroupsModule {}
