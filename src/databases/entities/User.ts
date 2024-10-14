import mongoose, { Document, Schema } from 'mongoose';

// Định nghĩa interface cho User
export interface IUser extends Document {
  fullName: string;
  email: string;
  phoneNumber?: string;
  gender?: 'male' | 'female' | 'other';
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email duy nhất
    phoneNumber: { type: String }, // Số điện thoại
    gender: { type: String, enum: ['male', 'female', 'other'] }, // Giới tính
    birthDate: { type: Date }, // Ngày sinh
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

// Tạo model từ schema
const User = mongoose.model<IUser>('User', userSchema);
export default User;
