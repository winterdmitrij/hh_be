import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { AccountEntity } from '../accounts/account.entity';
import { TransactionEntity } from '../transactions/transaction.entity';

@Entity({ schema: 'cat', name: 'documents' })
export class InformationEntity {
  @PrimaryColumn({ type: 'varchar', length: 3 })
  typ: string;

  @Column({ type: 'varchar', length: 30 })
  dsg: string;

  @Column({ type: 'varchar', length: 1 })
  rnk: string;

  @Column({ type: 'numeric', precision: 2 })
  frq: number;

  @Column({ type: 'boolean' })
  acc_rlv: boolean;

  @OneToOne(() => AccountEntity, (account) => account.information)
  @JoinColumn({ name: 'def_acc' })
  account: AccountEntity;

  @OneToOne(() => TransactionEntity, (transaction) => transaction.information)
  @JoinColumn({ name: 'def_tra' })
  transaction: TransactionEntity;
}
