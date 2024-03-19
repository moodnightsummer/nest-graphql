import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserInfo } from "./UserInfo";

@Entity("user", { schema: "learn" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "id" })
  id: number;

  @Column("varchar", { name: "first_name", nullable: true, length: 100 })
  firstName: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 100 })
  lastName: string | null;

  @Column("varchar", { name: "is_active", length: 100, default: () => "'1'" })
  isActive: string;

  @OneToMany(() => UserInfo, (userInfo) => userInfo.user)
  userInfos: UserInfo[];
}
