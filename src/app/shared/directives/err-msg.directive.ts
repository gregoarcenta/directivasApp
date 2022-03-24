import { ThrowStmt } from '@angular/compiler';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>
  private _color: string = 'red'
  private _message!: string

  @Input()
  set color(color: string) {
    this.htmlElement.nativeElement.style.color = color
    this._color = color
  }

  @Input()
  set message(msg: string) {
    this.htmlElement.nativeElement.innerText = msg
    this._message = msg
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
    this.color = this._color
  }

}
