import { Injectable } from '@nestjs/common';
import { User } from './user.dto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UserService {

    public users: User[] = [];

    addUserService(user: User): { message: string, status: string, user: User } {

        user.id = uuidv4();

        this.users.push(user);

        return { message: "User has been added successfully", status: "success", user: user };
    }

    updateService(user: User): { message: string, status: string, user: User } {

        let index = this.users.findIndex((e) => e.id === user.id)

        this.users[index] = user
        return { message: "User has been updated successfully", status: "success", user: user };
    }


    deleteService(userId: string): string {
        this.users = this.users.filter((e) => e.id !== userId);

        return "User has been deleted successfully";
    }


    findAllService(): User[] {

        return this.users;

    }

}