import {Module} from '@nestjs/common';
import {DogController} from './dog.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Dog, DogSchema} from "../dog/schema/dog.schema";
import {DogService} from "../dog/dog.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Dog.name, schema: DogSchema}]),
    ],
    controllers: [DogController],
    providers: [DogService]
})
export class DogModule {
}
