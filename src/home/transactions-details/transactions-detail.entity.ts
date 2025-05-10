import { Column, ViewEntity } from 'typeorm';

@ViewEntity({ schema: 'rpt', name: 'transactions_details_v' })
export class TransactionsDetailEntity {
  @Column({ type: 'varchar', length: 4 })
  prd: string;

  @Column({ type: 'varchar', length: 30 })
  ta_dsg: string;

  @Column({ type: 'numeric', precision: 5 })
  acc_id: number;

  @Column({ type: 'varchar', length: 30 })
  acc_dsg: string;

  @Column({ type: 'varchar', length: 8 })
  doc_id: string;

  @Column({ type: 'varchar', length: 30 })
  pg_dsg: string;

  @Column({ type: 'varchar', length: 30 })
  pd_dsg: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amt: number;

  @Column({ type: 'varchar', length: 50 })
  cmt: string;
}
