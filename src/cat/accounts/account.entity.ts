import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Accountgroup } from '../accountgroups/accountgroup.entity';

@Entity({ schema: 'cat', name: 'accounts' })
export class Account {
  @PrimaryColumn({ type: 'numeric', precision: 3 })
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  dsg: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  dsc?: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  rnk?: string | null;

  @Column({ type: 'boolean', default: true })
  act: boolean;

  @Column({ type: 'boolean', default: true })
  shw: boolean;

  @Column({ type: 'boolean', default: false })
  sav: boolean;

  @ManyToOne(() => Accountgroup, (accountgroup) => accountgroup.accounts, {
    nullable: false,
  })
  @JoinColumn({ name: 'ag_id' })
  accountgroup: Accountgroup;
}
