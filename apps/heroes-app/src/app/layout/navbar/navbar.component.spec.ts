import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe.skip('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    class IntersectionObserver {
      observe: () => void;
      unobserve: () => void;

      constructor(
        public callback: (entries: Array<IntersectionObserverEntry>) => void
      ) {
        this.observe = jasmine.createSpy('observe');
        this.unobserve = jasmine.createSpy('unobserve');
      }
    }
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    (window as any).IntersectionObserver = IntersectionObserver;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
