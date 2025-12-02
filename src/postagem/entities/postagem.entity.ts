import { IsNotEmpty, isNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_postagens"}) /// indica que a classe é uma Entidade/Model
export class Postagem{

    @PrimaryGeneratedColumn() // chave primaria e auto imcremental
    id: number

    @IsNotEmpty() // validador de Objeto
    @Column({length: 100, nullable: false}) // regra - NOT NULL do MySQL
    titulo: string

    @IsNotEmpty() // validador de Objeto
    @Column({length: 100, nullable: false}) // regra - NOT NULL do MySQL
    texto: string
    
    @UpdateDateColumn() // data atualizada automaticamente do bd
    data: Date

}