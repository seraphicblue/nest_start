import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CouponRepository,
  IssuedCouponRepository,
  OrderItemRepository,
  OrderRepository,
  ProductRepository,
  ShippingInfoRepository,
} from './repositories';
import {
  Coupon,
  IssuedCoupon,
  Order,
  OrderItem,
  Product,
  ShippingInfo,
} from './entities';
import { AuthModule } from '../auth/auth.module';
import { PaymentService, ProductService } from './services';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      Order,
      OrderItem,
      ShippingInfo,
      Coupon,
      IssuedCoupon,
      Product,
    ]),
  ],
  providers: [
    PaymentService,
    ProductService,

    OrderRepository,
    OrderItemRepository,
    ShippingInfoRepository,
    ProductRepository,
    CouponRepository,
    IssuedCouponRepository,
  ],
})
export class PaymentModule {}