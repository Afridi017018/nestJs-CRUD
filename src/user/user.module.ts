import { UserController } from './user.controller';
import { UserService } from './data/user.service';
import { Module } from "@nestjs/common";


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule{}