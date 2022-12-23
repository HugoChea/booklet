import { TestBed } from '@angular/core/testing';
import { User } from '@core/models/user';

import { TokenStorageService } from './token-storage.service';

const mockUser: User = {
  id: "123",
  username: ''
};

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('clear', () => {
    const spySessionStorage = spyOn(window.sessionStorage, 'clear');
    service.clear();
    expect(spySessionStorage).toHaveBeenCalled();
  });

  it('saveToken', () => {
    const spySessionStorage = spyOn(window.sessionStorage, 'setItem');
    service.saveToken("token");
    expect(spySessionStorage).toHaveBeenCalledWith('auth-token', "token");
  });

  it('getToken', () => {
    const spySessionStorage = spyOn(window.sessionStorage, 'getItem');
    service.getToken();
    expect(spySessionStorage).toHaveBeenCalledWith('auth-token');
  });

  it('saveUser', () => {
    const spySessionStorage = spyOn(window.sessionStorage, 'setItem');
    
    service.saveUser(mockUser);
    expect(spySessionStorage).toHaveBeenCalledWith('auth-user', JSON.stringify(mockUser));
  });

  it('getUser', () => {
    const spySessionStorage = spyOn(window.sessionStorage, 'getItem').and.returnValue(JSON.stringify(mockUser));
    expect(service.getUser()).toEqual(mockUser);
    expect(spySessionStorage).toHaveBeenCalledWith('auth-user');
  });

  it('getUser', () => {
    const spySessionStorage = spyOn(window.sessionStorage, 'getItem').and.returnValue(null);
    expect(service.getUser()).toBeUndefined();
    expect(spySessionStorage).toHaveBeenCalledWith('auth-user');
  });
});
