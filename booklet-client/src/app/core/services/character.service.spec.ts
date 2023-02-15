import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CreateCharacterDto } from '@core/dto/create-character-dto';
import { Character } from '@core/models/character/character';
import { environment } from '@env';

import { CharacterService } from './character.service';

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

  describe('createCharacter', () => {

    const expectedUrl = environment.url + '/character';

    it('should complete createCharacter http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: {} as CreateCharacterDto,
      };
      let actualResponse: CreateCharacterDto | undefined;
      const mockCreateCharacterDto: CreateCharacterDto = {} as CreateCharacterDto;
      // WHEN
      service.createCharacter(mockCreateCharacterDto).subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse.data);
    });
  });

  describe('getListLatestCharacterByBook', () => {

    const expectedUrl = environment.url + '/character/list-latest/bookId';

    it('should complete createCharacter http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: [],
      };
      let actualResponse: Character[] | undefined;
      // WHEN
      service.getListLatestCharacterByBook("bookId").subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse.data);
    });
  });

  describe('getListCharacterByBook', () => {

    const expectedUrl = environment.url + '/character/list/bookId';

    it('should complete getListCharacterByBook http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: [],
      };
      let actualResponse: Character[] | undefined;
      // WHEN
      service.getListCharacterByBook("bookId").subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse.data);
    });
  });

  describe('getCharacterById', () => {

    const expectedUrl = environment.url + '/character/characterId';

    it('should complete getListCharacterByBook http call on success', () => {
      // GIVEN
      const expectedResponse = {
        data: {} as Character,
      };
      let actualResponse: Character | undefined;
      // WHEN
      service.getCharacterById("characterId").subscribe({
        next: (response) => {
          actualResponse = response;
        },
      });

      // THEN
      const request = controller.expectOne(expectedUrl);
      request.flush(expectedResponse);
      controller.verify();
      expect(actualResponse).toEqual(expectedResponse.data);
    });
  });

});
