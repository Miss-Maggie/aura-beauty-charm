import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Service extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  icon: string;

  @Prop()
  description: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
