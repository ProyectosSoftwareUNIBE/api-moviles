import { ProductDto } from 'src/product/dto/product.dto';

export interface ShoppingItemDto {
  amount?: number;
  item?: ProductDto;
}
