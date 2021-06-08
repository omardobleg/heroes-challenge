import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FilterSearch, Hero } from '@heroes/data';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HeroesService } from './heroes.service';
import { HeroesStore } from './heroes.store';
import { PouchDBService } from './pouchDb/pouch-db.service';

export const mockResponse = {
  info: { currentPage: 1, count: 318, pages: 16 },
  result: [
    {
      id: 'Air_Jet',
      name: 'Air Jet',
      alias: 'Buster Hero',
      affiliation: null,
      birthday: null,
      bloodtype: null,
      description:
        'Buster Hero: Air Jet (バスターヒーロー エアジェット, Basutā Hīrō Eajetto?) is a Pro Hero.\n',
      fightstyle: null,
      gender: null,
      Eye: null,
      hair: null,
      height: null,
      kanji: 'エアジェット',
      occupation: 'Pro Hero',
      quirk: null,
      romaji: 'Eajetto',
      status: 'Alive',
      teams: null,
      images: [
        'https://storage.googleapis.com/my-hero-academia-api/Air_Jet-1.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/Air_Jet.jpg',
      ],
      epithet: null,
      ages: null,
      family: null,
    },
    {
      id: 'Akira_Iwako',
      name: 'Akira Iwako',
      alias: 'Stone Villain',
      affiliation: null,
      birthday: null,
      bloodtype: null,
      description:
        'Akira Iwako (岩 (いわ) 甲 (こう) 晶 (あきら) , Iwakō Akira?) was one of the Instant Villains.\n',
      fightstyle: null,
      gender: 'Male',
      Eye: null,
      hair: 'Black',
      height: null,
      kanji: '岩 (いわ) 甲 (こう) 晶 (あきら) ',
      occupation: 'Instant Villain',
      quirk: 'Unnamed Hardening Quirk',
      romaji: 'Iwakō Akira',
      status: 'Deceased',
      teams: null,
      images: [
        'https://storage.googleapis.com/my-hero-academia-api/Akira_Iwako-1.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/Akira_Iwako.jpg',
      ],
      epithet: null,
      ages: null,
      family: null,
    },
    {
      id: 'All_For_One',
      name: 'All For One',
      alias: 'Master',
      affiliation: 'League of Villains',
      birthday: null,
      bloodtype: 'B',
      description:
        "This article is about the character. For this character's Quirk, see All For One (Quirk)\nAll For One (オール・フォー・ワン, Ōru Fō Wan?), real name Shigaraki (死 (し) 柄 (がら) 木 (き) , Shigaraki?), was the former leader and benefactor of the League of Villains, the main antagonist of the Hideout Raid Arc and the overarching antagonist of the series.\nOnce Japan's most powerful villain and All Might's arch-nemesis, his true motives are unclear and his true identity is unknown. His current goal is to raise Tomura to become his eventual successor. \nHe is currently under police custody and imprisoned in Tartarus.\n",
      fightstyle: null,
      gender: 'Male',
      Eye: 'Unknown',
      hair: 'White (Formerly)',
      height: null,
      kanji: 'オール・フォー・ワン',
      occupation: 'Villain, Leader of the , League of Villains',
      quirk: 'All For One, Various stolen Quirks',
      romaji: 'Ōru Fō Wan',
      status: 'Imprisoned',
      teams: null,
      images: [
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One-1.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One-2.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One-3.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/All_For_One.jpg',
      ],
      epithet: '"Symbol of Evil"',
      ages: null,
      family: [{ id: 'Tomura_Shigaraki', name: 'Tomura Shigaraki' }],
    },
    {
      id: 'Amplifier',
      name: 'Amplifier',
      alias: null,
      affiliation: null,
      birthday: 'June 27',
      bloodtype: null,
      description:
        'Amplifier (増幅器, Zōfukuki?) is a Pro Hero who appears in My Hero Academia: Two Heroes.\n',
      fightstyle: null,
      gender: 'Female',
      Eye: 'Honey Brown',
      hair: 'Honey Brown',
      height: '173 cm (5\'8")',
      kanji: '増幅器',
      occupation: 'Pro Hero',
      quirk: 'Yell',
      romaji: 'Zōfukuki',
      status: 'Alive',
      teams: null,
      images: [
        'https://storage.googleapis.com/my-hero-academia-api/Amplifier-1.jpg',
        'https://storage.googleapis.com/my-hero-academia-api/Amplifier.jpg',
      ],
      epithet: null,
      ages: null,
      family: null,
    },
  ],
};

const filteredByName = (name: string) =>
  mockResponse.result.filter((r) => r.name == name);
describe('HeroesService', () => {
  let service: HeroesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: PouchDBService,
          useValue: {
            data: [] as Hero[],
            find(params: FilterSearch) {
              return params.name
                ? of({ docs: [] })
                : of({ docs: filteredByName('Air Jet') });
            },
            getOne(id: string) {
              return id === 'Akira Iwako'
                ? of({ ...filteredByName('Akira Iwako')[0] })
                : of({});
            },
            upsertOne(hero: Hero) {
              this.data.push(hero);
              return of(true);
            },
            deleteOne(hero: Hero) {
              return of(true);
            },
          },
        },
      ],
    });
    service = TestBed.inject(HeroesService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll data method', () => {
    it('should get all from rest initial query', fakeAsync(() => {
      service.getAll().subscribe((response) => {
        expect(response).toEqual(mockResponse.result);
      });
      const req = httpMock.expectOne(`${environment.restBase}?page=1`);
      req.flush(mockResponse);
    }));

    it('should get all from rest and db filtered', fakeAsync(() => {
      service
        .getAll(1, { name: 'Air Jet', alias: 'Buster', occupation: 'Pro Hero' })
        .subscribe((response) => {
          expect(response[0].id).toEqual(mockResponse.result[0].id);
        });
      const req = httpMock.expectOne(
        `${environment.restBase}?page=1&alias=Buster&name=Air%20Jet&occupation=Pro%20Hero`
      );
      const mock = mockResponse;
      mock.result = filteredByName('Air Jet');
      req.flush(mock);
    }));
  });

  describe('getOne method', () => {
    it('should get One', fakeAsync(() => {
      const one = filteredByName('Akira Iwako')[0];
      service.getOne('Akira Iwako').subscribe((response) => {
        expect(response.id).toEqual('Akira_Iwako');
      });
      tick(15000);
      const req = httpMock.expectOne(`${environment.restBase}/Akira Iwako`);
      req.flush({ ...one });
    }));
  });

  describe('upsert one method', () => {
    it('should upsert one', fakeAsync(() => {
      const hero = { id: '12' };
      service.upsertOne(hero as Hero).subscribe((response) => {
        expect(response).toBeTruthy();
      });
      tick(15000);
    }));
  });

  describe('delete one method', () => {
    it('should upsert one', fakeAsync(() => {
      const hero = { id: '12' };
      const store: HeroesStore = TestBed.get<HeroesStore>(HeroesStore);
      store.set([hero as Hero]);
      service.deleteOne(hero as Hero).subscribe((response) => {
        expect(store.getValue().ids?.length).toBe(0);
      });
      flush();
    }));
  });
});
