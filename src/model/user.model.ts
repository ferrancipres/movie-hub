import { Document, model, Schema } from 'mongoose'

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
        required: [true, 'Password is required']
    },
},
    { timestamps: true, versionKey: false }
);

const userModel = model<IUserDocument>('user', userSchema);
export default userModel;