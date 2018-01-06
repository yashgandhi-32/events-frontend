import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers } from '@angular/http';
@Injectable()
export class userService {
    headers
    public link = 'http://localhost:3000/api/'
    constructor(private http: HttpClient, private router: Router) {
        this.headers = new Headers().set('Content-Type', 'multipart/form-data');
    }
    getuserlist() {
        return this.http.get(this.link + 'user/get/list');
    }
    deleteuser(id) {
        return this.http.delete(this.link + 'user/delete/' + id)
    }
    addUser(data){
       return this.http.post(this.link+'auth/signup',data)
    }
}
