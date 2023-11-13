import { Document, model, Schema } from 'mongoose'
// He  quitado Document..si fall lo vuevlo a poner

interface IMovieDocument {
    name: string;
    poster: string;
    // cuidado con el type number que prisma no lo reconoce
    score: number;
    genres: string[];
    // campos extra que me gustaría añadir
    // year: number;
    // director: string;
    // description: string;
    // review: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Dudas acerca la estructura  del model. CUIDADO!
const movieSchema = new Schema<IMovieDocument>(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        poster: {
            type: String,
            required: [true, 'Poster is  required']
        },
        score: {
            type: Number,
            required: [true, 'Score is required']
        },
        // NEW
        genres: [{ type: Schema.Types.ObjectId, ref: 'genre' }]
    },
    { timestamps: true, versionKey: false }
);

const movieModel = model<IMovieDocument>('movie', movieSchema);
export default movieModel;