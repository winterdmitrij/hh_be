import { Testgroup } from 'src/cat/testgroups/entities/testgroup.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'cat', name: 'tests' })
export class Test {
  @PrimaryColumn({ type: 'numeric', precision: 3 })
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  dsg: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  dsc: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  rnk: string | null;

  @Column({ type: 'boolean', default: true })
  act: boolean;

  @ManyToOne(() => Testgroup, (testgroup) => testgroup.tests, {
    nullable: false,
  })
  @JoinColumn({ name: 'tg_id' })
  testgroup: Testgroup;
}
