import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";


Injectable()
export class UserService {

    public user: UserModel;
    public rankingUser: UserModel[] = [];

    constructor(){}

    setUser(user:UserModel) {
        this.user = user;
    }

    getuser(): UserModel {
        return this.user;
    }

    setRanking(user: UserModel){
        this.rankingUser.push(user);
    }

    getRanking(): UserModel[] {
        return this.rankingUser;
    }
}