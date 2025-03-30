import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'doc', name: 'periods' })
export class PeriodEntity {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  prd: string;

  @Column({ type: 'boolean', default: false })
  cls: boolean;

  @Column({ type: 'boolean', default: false })
  act: boolean;
}
