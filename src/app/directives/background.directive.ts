import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input() hoverBackground: string;
  @HostBinding('style.backgroundColor') backgroundColor = '';

  constructor() {}

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.hoverBackground;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = '';
  }

}
