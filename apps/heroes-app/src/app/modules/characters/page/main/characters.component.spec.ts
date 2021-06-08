import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@heroes/ui';
import { TranslateModule } from '@ngx-translate/core';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { PouchDBService } from './../../service/pouchDb/pouch-db.service';
import { CharactersComponent } from './characters.component';

const mockIntersectionObserver = class {
  readonly root: Element | null;

  readonly rootMargin: string;

  readonly thresholds: ReadonlyArray<number>;

  constructor() {
    this.root = null;
    this.rootMargin = '';
    this.thresholds = [];
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
};
xdescribe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        TuiPaginationModule,
        UiModule,
      ],
      declarations: [CharactersComponent],
      providers: [
        {
          provide: PouchDBService,
          useValue: {},
        },
      ],
    }).compileComponents();
    window.IntersectionObserver = mockIntersectionObserver;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
