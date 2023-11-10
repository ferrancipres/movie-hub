import { model, Schema } from 'mongoose'
// He  quitado Document..si falla lo vuelvo  a poner

interface IUserDocument {
    name: string;
    email: string;
    password: string;
    movie?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUserDocument>({
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
},
    { timestamps: true, versionKey: false }
);

const userModel = model<IUserDocument>('user', userSchema);
export default userModel;

