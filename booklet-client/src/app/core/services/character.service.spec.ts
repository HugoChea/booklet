import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CreateCharacterDto } from '@core/dto/create-character-dto';
import { environment } from '@env';

import { CharacterService } from './character.service';
import { mockCharacter } from './mocks/character';

const apiURL = environment.url + '/character';

describe('CharacterService', () => {
  let service: CharacterService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createCharacter', () => {
    const mockCreateCharacterDto: CreateCharacterDto = {} as CreateCharacterDto;
    service.createCharacter(mockCreateCharacterDto).subscribe(
      (res) => {
        // TODO : improve test case
        console.log(res);
      }
    );
    
    controller.expectOne(apiURL);
  });

  it('getListLatestCharacterByBook', () => {
    service.getListLatestCharacterByBook("bookId").subscribe(
      (res) => {
        // TODO : improve test case
        console.log(res);
      }
    );
    
    controller.expectOne(apiURL+ "/list-latest/bookId");
  });

  it('getListCharacterByBook', () => {
    service.getListCharacterByBook("bookId").subscribe(
      (res) => {
        // TODO : improve test case
        console.log(res);
      }
    );
    
    controller.expectOne(apiURL+ "/list/bookId");
  });

  it('getCharacterById', () => {
    service.getCharacterById("characterId").subscribe(
      (res) => {
        // TODO : improve test case
        console.log(res);
      }
    );
    
    controller.expectOne(apiURL+ "/characterId");
  });

});
