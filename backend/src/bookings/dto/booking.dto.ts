import { IsNotEmpty, IsString, IsMongoId, IsIn } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsMongoId()
  @IsNotEmpty()
  serviceId: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;
}

export class UpdateBookingStatusDto {
  @IsString()
  @IsIn(['Pending', 'Confirmed', 'Completed', 'Cancelled'])
  status: string;
}
