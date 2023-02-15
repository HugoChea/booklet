import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RegisterDto } from '@core/dto/register-dto';
import { environment } from '@env';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginDto } from '@core/dto/login-dto';
import { TokenStorageService } from './token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '@core/models/user';

describe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;
  const mockTokenStorageService: jasmine.SpyObj<TokenStorageService> =
    jasmine.createSpyObj(TokenStorageService, ['saveToken', 'saveUser', 'clear', 'getUser']);
  const mockjwtHelperService: jasmine.SpyObj<JwtHelperService> =
    jasmine.createSpyObj(JwtHelperService, ['decodeToken']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: TokenStorageService, useValue: mockTokenStorageService },
        { provide: JwtHelperService, useValue: mockjwtHelperService },
      ],
    });
    service = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register', () => {
    const registerDto: RegisterDto = {
      username: 'username',
      email: 'user@mail.com',
      password: 'strong_password',
    };
    const expectedUrl = environment.url + '/auth/register';

    it('should complete register http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: {
          message: 'working',
        },
      };
      let actualResponse: { data: { message: string } } | undefined;

      // WHEN
      service.register(registerDto).subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse);
    });

    it('should handle error register http call on error', () => {
      // GIVEN
      const status = 500;
      const statusText = 'Internal Server Error';
      const progressEvent = new ProgressEvent('API error');
      let actualError: HttpErrorResponse | undefined;

      // WHEN
      service.register(registerDto).subscribe({
        next: () => {
          fail('Next handler must not be called');
        },
        error: (error) => {
          actualError = error;
        },
        complete: () => {
          fail('Complete handler must not be called');
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.error(progressEvent, { status, statusText });
      controller.verify();
      expect(actualError).toBeDefined();
    });
  });

  describe('login', () => {
    const loginDto: LoginDto = {
      username: 'username',
      password: 'strong_password',
    };
    const expectedUrl = environment.url + '/auth/login';

    it('should complete login http call on success', () => {
      // GIVEN
      const expectedToken = 'some_access_token';
      const expectedUser = {
        id: 'id',
        username: 'username',
      };
      const expectedResponse = {
        data: {
          access_token: expectedToken,
        },
      };
      let actualResponse: { data: { access_token: string } } | undefined;

      mockjwtHelperService.decodeToken.and.returnValue({
        sub: 'id',
        username: 'username',
      });

      // WHEN
      service.login(loginDto).subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse);
      expect(mockTokenStorageService.saveToken).toHaveBeenCalledWith(expectedToken);
      expect(mockjwtHelperService.decodeToken).toHaveBeenCalledWith(expectedToken);
      expect(mockTokenStorageService.saveUser).toHaveBeenCalledWith(expectedUser);
    });

    it('should handle error login http call on error', () => {
      // GIVEN
      const status = 500;
      const statusText = 'Internal Server Error';
      const progressEvent = new ProgressEvent('API error');
      let actualError: HttpErrorResponse | undefined;

      // WHEN
      service.login(loginDto).subscribe({
        next: () => {
          fail('Next handler must not be called');
        },
        error: (error) => {
          actualError = error;
        },
        complete: () => {
          fail('Complete handler must not be called');
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.error(progressEvent, { status, statusText });
      controller.verify();
      expect(actualError).toBeDefined();
    });
  });

  describe('logout', () => {
    it('should clear token storage service when logout', ()=> {
      // WHEN
      service.logout();
      // THEN
      expect(mockTokenStorageService.clear).toHaveBeenCalledWith();
    });
  });

  describe('userOnRefresh', () => {

    [
      undefined,
      {
        id: "id",
        username: "username"
      }
    ].forEach(user => {
      it('should clear token storage service when logout', ()=> {
        // GIVEN
        mockTokenStorageService.getUser.and.returnValue(user);
        let actualUser: User | undefined;
        service.user$.subscribe({
          next: (user) => {
            actualUser = user;
          }
        });
        // WHEN
        service.userOnRefresh();
        // THEN
        expect(mockTokenStorageService.getUser).toHaveBeenCalledWith();
        expect(actualUser).toEqual(user);
      });
    });
    
  });
});
