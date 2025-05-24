import { Column, ViewEntity } from 'typeorm';

@ViewEntity({ schema: 'rpt', name: 'balance_posts_pv' })
export class PostsBalanceEntity {
  @Column({ type: 'numeric', precision: 4 })
  year: number;

  @Column({ type: 'numeric' })
  pst_id: number;

  @Column({ type: 'text' })
  pst_dsg: string;

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

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  pro_year: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  pro_mnt: number;
}
