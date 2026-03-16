import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schemas/booking.schema';
import { CreateBookingDto, UpdateBookingStatusDto } from './dto/booking.dto';
import { ServicesService } from '../services/services.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    private servicesService: ServicesService,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    // Verify service exists
    await this.servicesService.findOne(createBookingDto.serviceId);
    
    const createdBooking = new this.bookingModel(createBookingDto);
    return createdBooking.save();
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().populate('serviceId').exec();
  }

  async findOne(id: string): Promise<Booking> {
    const booking = await this.bookingModel.findById(id).populate('serviceId').exec();
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  async updateStatus(id: string, updateBookingStatusDto: UpdateBookingStatusDto): Promise<Booking> {
    const updatedBooking = await this.bookingModel
      .findByIdAndUpdate(id, { status: updateBookingStatusDto.status }, { new: true })
      .exec();
    if (!updatedBooking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return updatedBooking;
  }

  async remove(id: string): Promise<void> {
    const result = await this.bookingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }
}
