import {Injectable} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('prefix cannot be empty');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  // tslint:disable-next-line:typedef
  public getNumberOfGeneratedIds() {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): boolean {
    return uuidv4();
  }
}
