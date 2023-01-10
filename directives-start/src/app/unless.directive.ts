import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(value: boolean) {
    if(!value) {
      this.vcContainer.createEmbeddedView(this.templeRef);
    }else {
      this.vcContainer.clear();
    }

  }

  constructor(private templeRef: TemplateRef<any>, private vcContainer: ViewContainerRef) { }

}
