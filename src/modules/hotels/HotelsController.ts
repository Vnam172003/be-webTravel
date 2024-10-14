import { NextFunction, Request, Response } from 'express';
import HotelsService from './HotelsService';
import { validationResult } from 'express-validator';
import BadRequestException from '@/common/exception/BadRequestException';

class HotelsController {
  async findAllHotes(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestException(errors.array());
    }
    try {
      const hotelAll = await HotelsService.findAllHotels();
      return res.status(200).json({
        msg: 'Find All Hotels Succes',
        data: hotelAll,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findAllHotetByCity(req: Request, res: Response, next: NextFunction) {
    try {
      const { city } = req.body;
      const hotel = await HotelsService.findAllHotelByCity(city);
      return res.status(200).json({
        msg: 'Find Hotel By City Success',
        data: hotel,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findRoomsByHotel(req: Request, res: Response, next: NextFunction) {
    try {
      const { hotelId } = req.params;
      const rooms = await HotelsService.findRoomsByHotel(hotelId);
      return res.status(200).json({
        msg: 'Find Rooms By Hotel Success',
        data: rooms,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findHotelById(req: Request, res: Response, next: NextFunction) {
    try {
      const { hotelId } = req.params;
      const hotels = await HotelsService.findHotelById(hotelId);
      return res.status(200).json({
        msg: 'Find Hotel By Id Success',
        data: hotels,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
export default new HotelsController();
