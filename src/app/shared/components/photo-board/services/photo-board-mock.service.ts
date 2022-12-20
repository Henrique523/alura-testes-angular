import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

import {PhotoBoardService} from "./photo-board.service";
import {Photo} from "../interfaces/photo";
import {buildPhotoList} from "../test/build-photos";

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
