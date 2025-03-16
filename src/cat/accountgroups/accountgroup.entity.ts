import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Account } from '../accounts/account.entity';

@Entity({ schema: 'cat', name: 'accountgroups' })
export class Accountgroup {
  @PrimaryColumn({ type: 'numeric', precision: 1 })
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

  @OneToMany(() => Account, (account) => account.accountgroup)
  accounts: Account[];
}
