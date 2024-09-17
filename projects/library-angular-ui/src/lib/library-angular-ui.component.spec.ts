import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAngularUiComponent } from './library-angular-ui.component';

describe('LibraryAngularUiComponent', () => {
  let component: LibraryAngularUiComponent;
  let fixture: ComponentFixture<LibraryAngularUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAngularUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAngularUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
