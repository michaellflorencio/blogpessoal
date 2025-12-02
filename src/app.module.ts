import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

// decorator - etiqueta de metadados
@Module({
  imports: [ // configurando o TypeORM
    TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_blogpessoal',
  entities: [Postagem],
  synchronize: true,
}),
PostagemModule
  ],
  controllers: [],
  providers: [],
})

// exportamos ela para poder ser usada no main
export class AppModule {}
