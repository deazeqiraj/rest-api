import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BirdService} from "../bird/bird.service";
import {Bird} from "../bird/schema/bird.schema";
import {BirdDto} from "../bird/dto/bird.dto";

@Controller('birds')
export class BirdController {
    constructor(private birdService: BirdService) {
    }

    @Get()
    async getAllBirds(): Promise<Bird[]> {
        return this.birdService.findALL();
    }

    @Post()
    async createBird(
        @Body()
            bird: BirdDto,
    ): Promise<Bird> {
        return this.birdService.create(bird)
    }

    @Get(':id')
    async getBird(
        @Param('id') id: string
    ): Promise<Bird> {
        return this.birdService.findById(id);
    }

    @Put(':id')
    async updateBird(
        @Param('id') id: string,
        @Body()
            bird: BirdDto,
    ): Promise<Bird> {
        return this.birdService.updateById(id, bird)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id') id: string
    ): Promise<Bird> {
        return this.birdService.deleteById(id);
    }

    @Get('search/:name')
    async searchBirdsByName(@Param('name') name: string): Promise<Bird[]> {
        return this.birdService.findByName(name);
    }


}
