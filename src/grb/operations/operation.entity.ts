import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'grb', name: 'operations_v' })
export class OperationEntity {
  @PrimaryColumn({ type: 'varchar', length: 12 })
  id: string;

  @Column({ type: 'date' })
  dat: Date;

  @Column({ type: 'numeric', precision: 1 })
  ag_id: number;

  @Column({ type: 'varchar', length: 30 })
  ag_dsg: string;

  @Column({ type: 'numeric', precision: 3 })
  ad_id: number;

  @Column({ type: 'varchar', length: 30 })
  ad_dsg: string;

  @Column({ type: 'numeric', precision: 1 })
  ta_id: number;

  @Column({ type: 'varchar', length: 30 })
  ta_dsg: string;

  @Column({ type: 'numeric', precision: 3 })
  pg_id: number;

  @Column({ type: 'varchar', length: 30 })
  pg_dsg: string;

  @Column({ type: 'numeric', precision: 5 })
  pd_id: number;

  @Column({ type: 'varchar', length: 30 })
  pd_dsg: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amt;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cmt?: string;

  @Column({ type: 'varchar', length: 4 })
  prd: string;

  @Column({ type: 'varchar', length: 8 })
  doc_id: string;

  @Column({ type: 'varchar', length: 3 })
  doc_typ: string;
}
