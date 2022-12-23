import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  readonly TOKEN_KEY = 'auth-token';
  readonly USER_KEY = 'auth-user';

  constructor() { }
  
  public clear(): void {
    sessionStorage.clear();
  }

  public saveToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user: User): void {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  public getUser(): User | undefined {
    const user = sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return undefined;
  }
}
