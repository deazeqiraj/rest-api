import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Dog} from "../dog/schema/dog.schema";
import mongoose from "mongoose";


@Injectable()
export class DogService {
    constructor(
        @InjectModel(Dog.name)
        private dogModel: mongoose.Model<Dog>
    ) {
    }

    async findALL(): Promise<Dog[]> {
        const dogs = await this.dogModel.find();
        return dogs;
    }

    async create(dog: Dog): Promise<Dog> {
        const res = await this.dogModel.create(dog);
        return res;
    }

    async findById(id: string): Promise<Dog> {
        const dog = await this.dogModel.findById(id);

        if (!dog) {
            throw new NotFoundException("Book not found");
        }

        return dog;
    }

    async updateById(id: string, dog: Dog): Promise<Dog> {
        return await this.dogModel.findByIdAndUpdate(id, dog, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Dog> {
        return await this.dogModel.findByIdAndDelete(id);
    }

    async findByName(name: string): Promise<Dog[]> {
        const dogs = await this.dogModel.find({name: {$regex: name, $options: 'i'}});
        if (!dogs || dogs.length === 0) {
            throw new NotFoundException("No dogs found with that name");
        }
        return dogs;
    }


}
