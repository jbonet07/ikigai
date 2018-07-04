import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor() {}

  login(payload: LoginDTO) {
    return {
      status: "success",
      payload: {
        token: "ajhsbdguki27g1k2weasnmdvqYU"
      }
    };
  }
}

interface LoginDTO {
  email: string;
  password: string;
}
