import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountgroupDto } from './create-accountgroup.dto';

export class UpdateAccountgroupDto extends PartialType(CreateAccountgroupDto) {}
