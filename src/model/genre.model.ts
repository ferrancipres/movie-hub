import { Document, model, Schema } from 'mongoose'
//  He quitado Document...si fallo lo vuelvo a poner

// Crear interface
interface IGenreDocument {
    name: string;
    movies: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

// Dudas acerca la estructura del modelo..CUIDADO!
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