import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CatService} from "./cat.service";
import {Cat} from "./schema/cat.schema";
import {CatDto} from "./dto/cat.dto";

@Controller('cats')
export class CatController {
    constructor(private catService: CatService) {
    }

    @Get()
    async getAllCats(): Promise<Cat[]> {
        return this.catService.findALL();
    }

    @Post()
    async createCat(
        @Body()
            cat: CatDto,
    ): Promise<Cat> {
        return this.catService.create(cat)
    }

    @Get(':id')
    async getCat(
        @Param('id') id: string
    ): Promise<Cat> {
        return this.catService.findById(id);
    }

    @Put(':id')
    async updateCat(
        @Param('id') id: string,
        @Body()
            cat: CatDto,
    ): Promise<Cat> {
        return this.catService.updateById(id, cat)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id') id: string
    ): Promise<Cat> {
        return this.catService.deleteById(id);
    }

    @Get('search/:name')
    async searchCatsByName(@Param('name') name: string): Promise<Cat[]> {
        return this.catService.findByName(name);
    }


}
