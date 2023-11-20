import { Document, model, Schema } from 'mongoose'

interface IUserDocument extends Document {
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
        movies: [{ type: Schema.Types.ObjectId, ref: 'movie' }]
    },
    { timestamps: true, versionKey: false }
);

const userModel = model<IUserDocument>('user', userSchema);
export default userModel;

