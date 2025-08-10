import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

@ViewEntity({ schema: 'doc', name: 'periods_v' })
export class PeriodEntity {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  prd: string;

  @Column({ type: 'boolean', default: false })
  cls: boolean;

  @Column({ type: 'boolean', default: false })
  act: boolean;

  @Column({ type: 'numeric' })
  year: number;

  @Column({ type: 'numeric' })
  mnt: number;

  @Column({ type: 'text' })
  mon: string;

  @Column({ type: 'date' })
  doc_dat: Date;
}
