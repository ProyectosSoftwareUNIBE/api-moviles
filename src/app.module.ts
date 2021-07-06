import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://rafael:edu900fs@unibe.7ujmc.azure.mongodb.net/unibe?retryWrites=true&w=majority',
    ),
    AuthModule,
    ShoppingCartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
