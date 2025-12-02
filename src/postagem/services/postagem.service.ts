import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable() // Indica que a classe é de serviço e pode ser inserida em outras classe
export class PostagemService{
    // iniciando ferramentas para a classe de serviço
    constructor(
        @InjectRepository(Postagem) // pode chamar os metodos de uma classe repository
        private postagemRepository: Repository<Postagem>
    ){}

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find()
    }

}