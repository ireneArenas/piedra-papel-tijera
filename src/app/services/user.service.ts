import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";


Injectable()
export class UserService {

    public user: UserModel = new UserModel();
    public rankingUser: UserModel[] = [];

    constructor(){}

    setUser(user:UserModel) {
        this.user = user;
    }

    getuser(): UserModel {
        return this.user;
    }

    setRanking(user: UserModel){
        const userExist = this.rankingUser.find(exist => exist.name === user.name);
        if(!userExist) {
            this.rankingUser.push(user);
        } else {
            this.rankingUser.map( val => {
                if (val.name === user.name) {
                    val.score = user.score;
                }
            })
        } 
        localStorage.setItem('players', JSON.stringify(this.rankingUser));
    }

    getRanking(): UserModel[] {
        return this.rankingUser;
    }
}