import { PartialType } from '@nestjs/swagger';
import { CreateAccountsBalanceDto } from './create-accounts-balance.dto';

export class UpdateAccountsBalanceDto extends PartialType(CreateAccountsBalanceDto) {}
