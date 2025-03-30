import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { PositionEntity } from '../positions/position.entity';

@Entity({ schema: 'doc', name: 'documents' })
export class DocumentEntity {
  @PrimaryColumn({ type: 'varchar', length: 8 })
  id: string;

  @Column({ type: 'date' })
  dat: Date;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  amt: number;

  @Column({ type: 'boolean', default: false })
  rls: boolean;

  @OneToMany(() => PositionEntity, (position) => position.document)
  positions: PositionEntity[];
}
