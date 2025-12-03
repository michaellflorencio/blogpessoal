import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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

    async findById(id: number): Promise<Postagem>{ //Busca uma única postagem pelo seu ID.
        const postagem = await this.postagemRepository.findOne({where: {id}})
        if (!postagem){
            throw new HttpException("POstagem não encontrada", HttpStatus.NOT_FOUND)
        }
        return postagem
    }

    // async create(postagem:Postagem): Promise<Postagem>{
    //     return await this.postagemRepository.save(postagem)
    // }

}