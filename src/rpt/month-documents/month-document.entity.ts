import { Column, ViewEntity } from 'typeorm';

@ViewEntity({ schema: 'rpt', name: 'documents_v' })
export class MonthDocumentEntity {
  @Column({ type: 'varchar', length: 1 })
  doc_rnk: string;

  @Column({ type: 'varchar', length: 8 })
  doc_id: string;

  @Column({ type: 'date' })
  doc_dat: Date;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  doc_amt: number;

  @Column({ type: 'boolean' })
  doc_rls: boolean;

  @Column({ type: 'int8' })
  cnt_pos: number;

  @Column({ type: 'text' })
  prd: string;

  @Column({ type: 'text' })
  doc_typ: string;
}
