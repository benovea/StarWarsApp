import { createHost } from '@angular/compiler/src/core';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  // const event = new MouseEvent('mouseenter');
  let elem: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elem = fixture.debugElement.query(By.css('h2'));
  });

  it('create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have three highlighted elements', () => {
    const des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    // czym sie rozni debugElement od natvieElement ????
    expect(des.length).toBe(2);
  });

  it('should change color to yellow onMouseEnter', () => {
    elem.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(elem.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should change color onMouseLeave', () => {
    elem.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(elem.nativeElement.style.backgroundColor).toBe('');
  });
});

@Component({
  template: ` <h2 type="text" appHighlight>Something Yellow</h2>
    <h2 appHighlight>The Default</h2>
    <h2>No Highlight</h2>`,
})
class TestComponent {}
