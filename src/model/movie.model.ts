import { Document, model, Schema } from 'mongoose'

interface IMovieDocument extends Document {
    name: string;
    poster: string;
    score: number;
    genres?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

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
        genres: [{ type: Schema.Types.ObjectId, ref: 'genre' }]
    },
    { timestamps: true, versionKey: false }
);

const movieModel = model<IMovieDocument>('movie', movieSchema);
export default movieModel;