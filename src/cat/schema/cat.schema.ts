import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class Cat {

    @Prop()
    name: string;

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

export const CatSchema = SchemaFactory.createForClass(Cat)


// id:    number
// name:    string
// origin:    string
// temperament:    string
// colors:    array
// description:    string
// image:    string
