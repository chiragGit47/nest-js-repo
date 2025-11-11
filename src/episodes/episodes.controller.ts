import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
    constructor(private eposidesservices:EpisodesService){}
    @Get()
    findall(@Query('sort') sort: 'asc'| 'desc' = 'desc'){
        console.log(sort)
        return this.eposidesservices.findAll(sort)
    }

    @Get(':id')
    findfeatures(@Param() id: string){
        console.log(id)
        return this.eposidesservices.findFeatured()
    }

    @Get(':id')
    findone(@Param() id:string){
        console.log(id)
        return this.eposidesservices.findOne(id)
    }

    @Post()
    create(@Body() input:any ){
        return "this action creates a new episode"
    }
}
