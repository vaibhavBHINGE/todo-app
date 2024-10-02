import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskPageComponent } from './delete-task-page.component';

describe('DeleteTaskPageComponent', () => {
  let component: DeleteTaskPageComponent;
  let fixture: ComponentFixture<DeleteTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTaskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
