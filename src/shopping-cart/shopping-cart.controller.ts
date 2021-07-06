import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ShoppingCartDto } from './dto/shopping-cart.dto';
import { ShoppingCartService } from './shopping-cart.service';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private shoppinCartService: ShoppingCartService) {}

  @Post()
  async createShoppingCart(
    @Res() res,
    @Body() shoppingCartDto: ShoppingCartDto,
  ) {
    const shoppingCart = await this.shoppinCartService.createShoppingCart(
      shoppingCartDto,
    );
    return res.status(HttpStatus.ACCEPTED).json({
      message: 'Su pedido fue generado',
    });
  }
}
