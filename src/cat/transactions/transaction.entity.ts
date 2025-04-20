import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { PostgroupEntity } from '../postgroups/postgroup.entity';
import { InformationEntity } from '../informations/information.entity';

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

  // One-to-One Beziehung zur Informations-Tabelle
  @OneToOne(() => InformationEntity, (information) => information.transaction)
  information: InformationEntity;
}
