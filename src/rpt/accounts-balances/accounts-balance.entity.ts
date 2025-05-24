import { Column, ViewEntity } from 'typeorm';

@ViewEntity({ schema: 'rpt', name: 'balance_accounts_pv' })
export class AccountsBalanceEntity {
  @Column({ type: 'numeric', precision: 4 })
  year: number;

  @Column({ type: 'numeric' })
  acc_id: number;

  @Column({ type: 'text' })
  acc_dsg: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  jan: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  feb: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  mrz: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  apr: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  mai: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  jun: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  jul: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  aug: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  sep: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  okt: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  nov: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  dez: number;
}
