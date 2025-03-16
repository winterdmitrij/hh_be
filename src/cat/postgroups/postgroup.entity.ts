import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { TransactionEntity } from '../transactions/transaction.entity';
import { PostEntity } from '../posts/post.entity';

@Entity({ schema: 'cat', name: 'postgroups' })
export class PostgroupEntity {
  @PrimaryColumn({ type: 'numeric', precision: 3 })
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  dsg: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  dsc?: string;

  @Column({ type: 'char', length: 1, nullable: true })
  rnk?: string;

  @Column({ type: 'boolean', default: true })
  act: boolean;

  @ManyToOne(() => TransactionEntity, (transaction) => transaction.postgroups, {
    nullable: false,
  })
  @JoinColumn({ name: 'ta_id' })
  transaction: TransactionEntity;

  @OneToMany(() => PostEntity, (post) => post.postgroup)
  posts: PostEntity[];
}
