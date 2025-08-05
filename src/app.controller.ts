import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_SERVICE_notification')
    private readonly kafkaClient: ClientKafka,
  ) {}

  @MessagePattern('order_created')
  handleOrderCreated(data: any): void {
    console.log('Notificação de pedido recebido:', data);
    // Lógica para enviar notificação
  }

  @MessagePattern('payment_succeed')
  handlePaymentSucceed(data: any): void {
    console.log('Notificação de pagamento recebido:', data);
    // Lógica para enviar notificação
  }
}
