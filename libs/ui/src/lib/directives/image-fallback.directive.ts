import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[heroesImageFallback]',
})
export class ImageFallbackDirective {
  @HostBinding('src')
  @Input()
  src!: string;
  @Input() heroesImageFallback!: string;
  @HostListener('error')
  updateUrl() {
    this.src = this.heroesImageFallback;
  }
}
