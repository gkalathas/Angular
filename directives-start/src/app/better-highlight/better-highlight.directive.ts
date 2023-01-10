import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }


  @HostBinding('style.backgroundColor') backgroundColor: string = 'pink';

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = 'blue';
  }


  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

    this.backgroundColor = 'red';

  }
}
