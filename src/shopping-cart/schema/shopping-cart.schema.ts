import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ShoppingItemDto } from '../dto/shopping-item.dto';

export type ShoppingCartDocument = ShoppingCart & Document;
@Schema()
export class ShoppingCart {
  @Prop()
  shoppingCart: ShoppingItemDto[];
}

export const ShoppingCartSchema = SchemaFactory.createForClass(ShoppingCart);
