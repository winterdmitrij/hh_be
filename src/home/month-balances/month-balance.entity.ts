import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

@ViewEntity({ schema: 'rpt', name: 'month_balances_v' })
export class MonthBalanceEntity {
  @Column({ type: 'varchar' })
  pre: string;

  @Column({ type: 'varchar', length: 30 })
  acc_dsg: string;

  @Column({ type: 'boolean' })
  act: boolean;

  @Column({ type: 'boolean' })
  shw: boolean;

  @Column({ type: 'boolean' })
  grp: boolean;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  beg_std: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  inc: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  exp: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  trf: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  sld: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  end_std: string;

  @Column({ type: 'varchar', length: 4 })
  prd: string;

  @Column({ type: 'numeric', precision: 3 })
  acc_id: number;
}
