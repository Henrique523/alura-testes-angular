import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";

import {PhotoListComponent} from "./photo-list.component";
import {PhotoListModule} from "./photo-list.module";
import {PhotoBoardService} from "../../shared/components/photo-board/services/photo-board.service";
import {buildPhotoList} from "../../shared/components/photo-board/test/build-photos";
import {of} from "rxjs";

describe(`${PhotoListComponent.name}`, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    service = TestBed.inject(PhotoBoardService);
    component = fixture.componentInstance;
  });

  it("Should create component", () => {
    expect(component).toBeTruthy();
  });

  it("(D) Should display board when data arrives", () => {
    const photos = buildPhotoList();

    spyOn(service, "getPhotos").and.returnValue(of(photos));
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector("app-photo-board");
    const loader = fixture.nativeElement.querySelector(".loader");

    expect(board).withContext("Should display board").not.toBeNull();
    expect(loader).withContext("Should not display loader").toBeNull();
  });

  it("(D) Should display loader while waiting for data", () => {
    const photos = buildPhotoList();

    spyOn(service, "getPhotos").and.returnValue(of(null));
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector("app-photo-board");
    const loader = fixture.nativeElement.querySelector(".loader");

    expect(board).withContext("Should not display board").toBeNull();
    expect(loader).withContext("Should display loader").not.toBeNull();
  });
});
