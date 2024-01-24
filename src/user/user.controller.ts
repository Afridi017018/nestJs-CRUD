import { User } from './data/user.dto';
import { UserService } from './data/user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("user")
export class UserController{

    constructor(private userService:  UserService){}

    @Get("/findAll")
    getAllUsers() : User[]{
        return this.userService.findAllService();
    }

    @Put("/update")
    updateUsers(@Body() user: User ) : { message: string, status: string, user: User }{
        return this.userService.updateService(user)
    }

    @Delete("/delete/:id")
    deleteUser(@Param("id") userId: string ) : string{
        return this.userService.deleteService(userId)
    }

    @Post("/add")
    addUser(@Body() user: User ) : { message: string, status: string, user: User }{
        return this.userService.addUserService(user)
    }

}