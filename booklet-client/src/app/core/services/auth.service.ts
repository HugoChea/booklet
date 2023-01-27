import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, throwError, tap, catchError, Subject } from 'rxjs';
import { LoginDto } from '../dto/login-dto';
import { RegisterDto } from '../dto/register-dto';
import { TokenStorageService } from './token-storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from '../models/user';
import { HttpApiResponse } from '@core/models/http/http-api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = environment.url + '/auth';

  user$: Subject<User | undefined> = new Subject<User | undefined>();

  private jwtHelperService: JwtHelperService;

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {

    this.jwtHelperService = new JwtHelperService();

  }

  register(registerDto: RegisterDto): Observable<{ data: {message: string} }> {
    return this.http.post<HttpApiResponse<{message: string}>>(this.apiURL + '/register', registerDto)
    .pipe(
      catchError(this.handleError)
    );
  }

  login(loginDto: LoginDto): Observable<{ data: {access_token: string} }> {
    return this.http.post<HttpApiResponse<{access_token: string}>>(this.apiURL + '/login', loginDto)
    .pipe(
      tap(res => {
        const token = res.data.access_token;
        this.tokenStorageService.saveToken(token);
        const decoded_token = this.jwtHelperService.decodeToken(token);
        const user : User = {
          id: decoded_token.sub,
          username: decoded_token.username
        };
        this.tokenStorageService.saveUser(user);
        this.user$.next(user);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        return throwError(() => error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  logout(): void {
    this.tokenStorageService.clear();
    this.user$.next(undefined);
  }

  userOnRefresh(): void {
    const user = this.tokenStorageService.getUser();
    
    if (user){
      this.user$.next(user);
    }
  }

}
