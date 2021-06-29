import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {

    }

    async findUser(nameUser: string): Promise<any> {
        const user = await this.userModel.findOne({ name: nameUser });
        return user;
    }
}
