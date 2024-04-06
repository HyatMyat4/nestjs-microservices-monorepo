import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrderRepository) {}

  async createOrder(request: CreateOrderRequest) {
    return this.ordersRepository.create(request);
  }
}
