import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Bird} from "../bird/schema/bird.schema";
import mongoose from "mongoose";


@Injectable()
export class BirdService {
    constructor(
        @InjectModel(Bird.name)
        private birdModel: mongoose.Model<Bird>
    ) {
    }

    async findALL(): Promise<Bird[]> {
        const birds = await this.birdModel.find();
        return birds;
    }

    async create(bird: Bird): Promise<Bird> {
        const res = await this.birdModel.create(bird);
        return res;
    }

    async findById(id: string): Promise<Bird> {
        const bird = await this.birdModel.findById(id);

        if (!bird) {
            throw new NotFoundException("Book not found");
        }

        return bird;
    }

    async updateById(id: string, bird: Bird): Promise<Bird> {
        return await this.birdModel.findByIdAndUpdate(id, bird, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Bird> {
        return await this.birdModel.findByIdAndDelete(id);
    }

    async findByName(name: string): Promise<Bird[]> {
        const birds = await this.birdModel.find({name: {$regex: name, $options: 'i'}});
        if (!birds || birds.length === 0) {
            throw new NotFoundException("No birds found with that name");
        }
        return birds;
    }


}
