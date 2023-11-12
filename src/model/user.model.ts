import { Document, model, Schema } from 'mongoose'
// He  quitado Document..si falla lo vuelvo  a poner

interface IUserDocument {
    name: string;
    email: string;
    password: string;
    movies: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUserDocument>(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            trim: true,
            minlength: [2, "The password is too short"],
            maxlength: [20, "The password is too short"]
        },
        // Vamos a crear una relación entre user > movies
        // Para eso debemos modificar el schema..que nos dice que contiene
        // movies: [{id_movie,  id_movie2, id_movie3}] cada id..es un 'object id'
        //  habra que hacer referenicia a otro schema que se llama 'movie'
        movies: [{ type: Schema.Types.ObjectId, ref: 'movie' }]
    },
    { timestamps: true, versionKey: false }
);

const userModel = model<IUserDocument>('user', userSchema);
export default userModel;

