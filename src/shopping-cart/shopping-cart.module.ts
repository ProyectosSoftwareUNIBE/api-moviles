import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingCartSchema } from './schema/shopping-cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ShoppingCart', schema: ShoppingCartSchema },
    ]),
  ],
  providers: [ShoppingCartService],
  controllers: [ShoppingCartController],
})
export class ShoppingCartModule {}
