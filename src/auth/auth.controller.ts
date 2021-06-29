import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private autservice:AuthService){}

    @Post('/login')
    async login(@Res() res, @Body() userDto:UserDto){
        const user=await this.autservice.findUser(userDto.name);
        if(user){
            if(user.password===userDto.password) return res.status(HttpStatus.OK).json(user);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'datos invalidos',
              });
        }
        return res.status(HttpStatus.NOT_FOUND).json({
            message: 'El usuario no existe',
          });
    }
}
