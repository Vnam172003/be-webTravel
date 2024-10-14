import User from '@/databases/entities/User';

class UserService {
  async createUser(
    fullName: string,
    email: string,
    phoneNumber: number,
    birthDate: Date,
    gender: string
  ) {
    const user = new User({ fullName, email, phoneNumber, birthDate, gender });
    return await user.save();
  }
}
export default new UserService();
