import { PartialType } from '@nestjs/swagger';
import { CreateTestgroupDto } from './create-testgroup.dto';

export class UpdateTestgroupDto extends PartialType(CreateTestgroupDto) {}
