import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {Cat} from "./schema/cat.schema";
import {InjectModel} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Injectable()
export class CatService {
    constructor(
        @InjectModel(Cat.name)
        private catModel: mongoose.Model<Cat>
    ) {
    }

    async findALL(): Promise<Cat[]> {
        const cats = await this.catModel.find();
        return cats;
    }

    async create(cat: Cat): Promise<Cat> {
        const res = await this.catModel.create(cat);
        return res;
    }

    async findById(id: string): Promise<Cat> {
        const cat = await this.catModel.findById(id);

        if (!cat) {
            throw new NotFoundException("Book not found");
        }

        return cat;
    }

    async updateById(id: string, cat: Cat): Promise<Cat> {
        return await this.catModel.findByIdAndUpdate(id, cat, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Cat> {
        return await this.catModel.findByIdAndDelete(id);
    }

    async findByName(name: string): Promise<Cat[]> {
        const cats = await this.catModel.find({name: {$regex: name, $options: 'i'}});
        if (!cats || cats.length === 0) {
            throw new NotFoundException("No cats found with that name");
        }
        return cats;
    }


}
