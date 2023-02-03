import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPlaylistComponent } from './modify-playlist.component';

describe('ModifyPlaylistComponent', () => {
  let component: ModifyPlaylistComponent;
  let fixture: ComponentFixture<ModifyPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
