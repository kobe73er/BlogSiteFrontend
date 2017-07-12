import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBlogComponent } from './write-blog.component';

describe('WriteBlogComponent', () => {
  let component: WriteBlogComponent;
  let fixture: ComponentFixture<WriteBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});