import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPelisComponent } from './menu-pelis.component';

describe('MenuPelisComponent', () => {
  let component: MenuPelisComponent;
  let fixture: ComponentFixture<MenuPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
