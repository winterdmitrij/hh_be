import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PostgroupEntity } from '../postgroups/postgroup.entity';

@Entity({ schema: 'cat', name: 'posts' })
export class PostEntity {
  @PrimaryColumn({ type: 'numeric', precision: 5 })
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  dsg: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  dsc?: string;

  @Column({ type: 'char', length: 1, nullable: true })
  rnk?: string;

  @Column({ type: 'boolean', default: true })
  act: boolean;

  @Column({ type: 'boolean', default: true })
  trf: boolean;

  @Column({ type: 'boolean', default: false })
  csh: boolean;

  @ManyToOne(() => PostgroupEntity, (postgroup) => postgroup.posts, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'pg_id' })
  postgroup: PostgroupEntity;
}
