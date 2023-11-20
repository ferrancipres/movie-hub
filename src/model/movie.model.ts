import { Document, model, Schema } from 'mongoose'

interface IMovieDocument extends Document {
    name: string;
    poster_image: string;
    score: number;
    genres: string[];
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
        poster_image: {
            type: String,
            required: [true, 'Poster is  required']
        },
        score: {
            type: Number,
            required: [true, 'Score is required']
        },
        genres: [{ type: Schema.Types.ObjectId, ref: 'genre' }]
    },
    { timestamps: true, versionKey: false }
);

const movieModel = model<IMovieDocument>('movie', movieSchema);
export default movieModel;