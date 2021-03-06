import { Type } from 'class-transformer'
import { IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CreateGenreDto } from 'src/genres/dto/create-genre.dto'
import { Game } from '../entities/game.entity'
export class CreateGameDto extends Game {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    cover: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsInt()
    @IsNotEmpty()
    year: number

    @IsNumber()
    @IsNotEmpty()
    imdb: number

    @IsString()
    @IsOptional()
    trailer?: string | null

    @IsString()
    @IsOptional()
    gameplay?: string | null

    @IsOptional()
    @IsString({each: true})
    @IsArray()
    genres?: string[]
}
