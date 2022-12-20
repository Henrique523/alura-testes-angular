import {ComponentFixture, fakeAsync, TestBed} from "@angular/core/testing";

import {ActionDirective} from "./action.directive";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

describe(`${ActionDirective.name}`, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent, ActionDirective],
    });

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it("(D) (@Output appAction) should emit event with payload when ENTER key is pressed", fakeAsync(() => {
    // const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-component");
    const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;

    const event = new KeyboardEvent("keyup", { key: "Enter" });
    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBe(true);
  }));

  it("(D) (@Output appAction) should emit event with payload when CLICK is pressed", fakeAsync(() => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector(".dummy-component");
    divEl.click();

    expect(component.hasEvent()).toBe(true);
  }));

});

@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {
  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
