import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ResponseDto<T> {
  @IsNumber()
  statusCode: number;

  @IsString()
  message: string;

  @IsOptional()
  data: T;

  constructor(code: number, message: string, data?: T) {
    this.statusCode = code;
    this.message = message;
    this.data = data;
  }
}