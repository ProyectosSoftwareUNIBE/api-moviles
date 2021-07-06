import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShoppingCartDto } from './dto/shopping-cart.dto';
import {
  ShoppingCart,
  ShoppingCartDocument,
} from './schema/shopping-cart.schema';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel('ShoppingCart')
    private readonly shoppingCartModule: Model<ShoppingCartDocument>,
  ) {}

  async createShoppingCart(
    shoppingCartDto: ShoppingCartDto,
  ): Promise<ShoppingCart> {
    const shoppingCart = new this.shoppingCartModule(shoppingCartDto);
    return shoppingCart.save();
  }
}
