import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { PositionEntity } from '../positions/position.entity';

@Entity({ schema: 'doc', name: 'position_details' })
export class PositionDetailEntity {
  @PrimaryColumn({ type: 'varchar', length: 11 })
  pos_id: string;

  @Column({ type: 'varchar', length: 500 })
  amt_dtl: string;

  @OneToOne(() => PositionEntity, (position) => position.positionDetail)
  @JoinColumn({ name: 'pos_id' })
  position: PositionEntity;
}
