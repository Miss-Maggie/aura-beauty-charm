import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Service } from '../../services/schemas/service.schema';

@Schema({ timestamps: true })
export class Booking extends Document {
  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ type: Types.ObjectId, ref: Service.name, required: true })
  serviceId: Types.ObjectId;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ default: 'Pending' })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
