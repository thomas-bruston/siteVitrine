import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjetDetail } from './projet-detail';

describe('ProjetDetail', () => {
  let component: ProjetDetail;
  let fixture: ComponentFixture<ProjetDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetDetail],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
