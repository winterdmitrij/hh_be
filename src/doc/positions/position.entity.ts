import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { DocumentEntity } from '../documents/document.entity';
import { PositionDetailEntity } from '../position-details/position-detail.entity';
import { AccountEntity } from 'src/cat/accounts/account.entity';
import { PostEntity } from 'src/cat/posts/post.entity';

@Entity({ schema: 'doc', name: 'positions' })
export class PositionEntity {
  @PrimaryColumn({ type: 'varchar', length: 11 })
  id: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  amt: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cmt: string;

  // Beziehung zur Document-Tabelle
  @ManyToOne(() => DocumentEntity, (document) => document.positions)
  @JoinColumn({ name: 'doc_id' })
  document: DocumentEntity;

  // Beziehung zur Account-Tabelle (cat.accounts)
  @ManyToOne(() => AccountEntity, (account) => account.positions)
  @JoinColumn({ name: 'acc_id' })
  account: AccountEntity;

  // Beziehung zur Post-Tabelle (cat.posts)
  @ManyToOne(() => PostEntity, (post) => post.positions)
  @JoinColumn({ name: 'pst_id' })
  post: PostEntity;

  // One-to-One Beziehung zur PositionDetail-Tabelle
  @OneToOne(
    () => PositionDetailEntity,
    (positionDetail) => positionDetail.position,
  )
  positionDetail: PositionDetailEntity;
}
