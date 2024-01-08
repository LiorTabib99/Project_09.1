import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesCategoryTableComponent } from './languages-category-table.component';

describe('LanguagesCategoryTableComponent', () => {
  let component: LanguagesCategoryTableComponent;
  let fixture: ComponentFixture<LanguagesCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesCategoryTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguagesCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
