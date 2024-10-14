import Hotel from '@/databases/entities/Hotel';
import Room from '@/databases/entities/Room';

class HotelsService {
  async findAllHotels() {
    return await Hotel.find();
  }
  async findAllHotelByCity(city: string) {
    return Hotel.find({ city });
  }
  async findRoomsByHotel(hotelId: string) {
    const hotel = await Hotel.findById(hotelId).select('_id');
    if (!hotel) {
      throw new Error('Hotel not found');
    }

    return await Room.find({ hotel: hotel._id });
  }
  async findHotelById(hotelId: string) {
    return await Hotel.findById(hotelId);
  }
}
export default new HotelsService();
