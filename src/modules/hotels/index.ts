import { Router } from 'express';
import HotelsController from './HotelsController';
const HotelsRouter = Router();

HotelsRouter.get('/all', HotelsController.findAllHotes);
HotelsRouter.get('/city', HotelsController.findAllHotetByCity);
HotelsRouter.get('/rooms/:hotelId', HotelsController.findRoomsByHotel);
HotelsRouter.get('/:hotelId', HotelsController.findHotelById);
export default HotelsRouter;
