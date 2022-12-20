import {ComponentFixture, TestBed} from "@angular/core/testing";
import {SimpleChange, SimpleChanges} from "@angular/core";

import {PhotoBoardComponent} from "./photo-board.component";
import {PhotoBoardModule} from "./photo-board.module";
import {buildPhotoList} from "./test/build-photos";

describe(`${PhotoBoardComponent.name}`, () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let component: PhotoBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it("Should display rows and columns when (@Input photos) has value", () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true),
    };

    component.ngOnChanges(change);

    expect(component.rows.length).withContext("Number of rows").toBe(2);
    expect(component.rows[0].length).withContext("Number of columns").toBe(4);
  });
});
