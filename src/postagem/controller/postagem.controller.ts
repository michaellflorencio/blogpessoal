import { All, Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
import { get } from "http";

@Controller("/postagens") // indica que a classe é uma Controller
export class PostagemController{
    constructor(private readonly postagemService: PostagemService){}

    @Get() // indica qual tipo de requisição esse metodo é executado
    @HttpCode(HttpStatus.OK) // monsta a resposta HTTP para o front com o status 200
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }

}