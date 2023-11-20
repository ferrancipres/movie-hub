import { Document, model, Schema } from 'mongoose'

interface IGenreDocument extends Document {
    name: string;
    movies: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

const genreSchema = new Schema<IGenreDocument>(
    {
        name: {
            type: String,
            required: [true, 'Genre is required']
        },
        movies: [{ type: Schema.Types.ObjectId, ref: 'movie' }]
    },
    { timestamps: true, versionKey: false }
);

const genreModel = model<IGenreDocument>('genre', genreSchema);
export default genreModel;