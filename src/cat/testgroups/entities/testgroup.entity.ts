import { Test } from 'src/cat/tests/entities/test.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'cat', name: 'testgroups' })
export class Testgroup {
  @PrimaryColumn({ type: 'numeric', precision: 1 })
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  dsg: string;

  @Column({ type: 'char', length: 1, nullable: true })
  rnk: string | null;

  @OneToMany(() => Test, (test) => test.testgroup)
  tests: Test[];
}
