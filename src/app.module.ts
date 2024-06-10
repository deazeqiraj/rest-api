import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatModule} from './cat/cat.module';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {BirdModule} from './bird/bird.module';
import {DogModule} from './dog/dog.module';
import * as process from "node:process";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.DB_URI),
        CatModule,
        BirdModule,
        DogModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
