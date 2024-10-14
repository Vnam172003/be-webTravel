import BadRequestException from '@/common/exception/BadRequestException';
import { ResponseCustom } from '@/utils/expressCustom';
import { Request, NextFunction, Response } from 'express';
import { validationResult } from 'express-validator';
import userService from './userService';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestException(errors.array());
    }
    try {
      const { fullName, email, phoneNumber, birthDate, gender } = req.body;
      const user = await userService.createUser(
        fullName,
        email,
        phoneNumber,
        birthDate,
        gender
      );
      res.status(200).json({
        msg: 'Create User Success',
        data: user,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
export default new UserController();
