import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DogService} from "../dog/dog.service";
import {Dog} from "../dog/schema/dog.schema";
import {DogDto} from "../dog/dto/dog.dto";

@Controller('dogs')
export class DogController {
    constructor(private dogService: DogService) {
    }

    @Get()
    async getAllDogs(): Promise<Dog[]> {
        return this.dogService.findALL();
    }

    @Post()
    async createDog(
        @Body()
            dog: DogDto,
    ): Promise<Dog> {
        return this.dogService.create(dog)
    }

    @Get(':id')
    async getDog(
        @Param('id') id: string
    ): Promise<Dog> {
        return this.dogService.findById(id);
    }

    @Put(':id')
    async updateDog(
        @Param('id') id: string,
        @Body()
            dog: DogDto,
    ): Promise<Dog> {
        return this.dogService.updateById(id, dog)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id') id: string
    ): Promise<Dog> {
        return this.dogService.deleteById(id);
    }

    @Get('search/:name')
    async searchDogsByName(@Param('name') name: string): Promise<Dog[]> {
        return this.dogService.findByName(name);
    }


}
