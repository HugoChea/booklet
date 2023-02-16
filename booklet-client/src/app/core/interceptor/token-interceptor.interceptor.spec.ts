import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';

describe('TokenInterceptorInterceptor', () => {
  let interceptor: TokenInterceptorInterceptor;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenInterceptorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(TokenInterceptorInterceptor);
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    sessionStorage.removeItem('auth-token');
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add an Authorization header with the token if the token is present in localStorage', () => {
    const token = 'fake-token';
    sessionStorage.setItem('auth-token', token);

    http.get('/api/data').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/api/data');
    expect(req.request.headers.has('Authorization')).toBeTruthy();
    expect(req.request.headers.get('Authorization')).toEqual('Bearer ' + token);
    req.flush({});
  });

  it('should not add an Authorization header if the token is not present in localStorage', () => {

    http.get('/api/data').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/api/data');
    expect(req.request.headers.has('Authorization')).toBeFalsy();
    req.flush({});
  });
});