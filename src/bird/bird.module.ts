import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Bird, BirdSchema} from "../bird/schema/bird.schema";
import {BirdController} from "../bird/bird.controller";
import {BirdService} from "../bird/bird.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Bird.name, schema: BirdSchema}]),
    ],
    controllers: [BirdController],
    providers: [BirdService]
})
export class BirdModule {
}
