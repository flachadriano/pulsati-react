import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "text", nullable: false })
  nome: string;
  
  @Column({ type: "text" })
  sobrenome: string;

}
