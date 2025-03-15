import { Column, Entity } from 'typeorm';

@Entity('accounts')
export class Account {
  id: number;

  @Column()
  dsg: string;

  @Column()
  dsc: string;

  @Column()
  rnk: string;

  @Column()
  act: boolean;

  @Column()
  shw: boolean;
}
