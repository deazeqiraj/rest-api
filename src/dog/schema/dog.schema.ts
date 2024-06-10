import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Dog {

    @Prop()
    name: string;

    @Prop()
    breed_group: string;

    @Prop()
    size: string;

    @Prop()
    lifespan: string;

    @Prop()
    origin: string;

    @Prop()
    temperament: string;

    @Prop()
    colors: string[];

    @Prop()
    description: string;

    @Prop()
    image: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
