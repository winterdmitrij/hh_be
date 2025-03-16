import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { PostgroupEntity } from '../postgroups/postgroup.entity';

@Entity({ schema: 'cat', name: 'transactions' })
export class TransactionEntity {
  @PrimaryColumn({ type: 'numeric', precision: 1 })
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  dsg: string;

  @Column({ type: 'char', length: 1, nullable: true })
  rnk?: string;

  @OneToMany(() => PostgroupEntity, (postgroup) => postgroup.transaction)
  postgroups: PostgroupEntity[];
}
