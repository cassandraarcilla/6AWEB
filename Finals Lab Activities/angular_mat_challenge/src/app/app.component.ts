import { Component, OnInit, Renderer2 } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  template: `<app-register (themeChange)="onThemeChange($event)"></app-register>`,
  host: { '[class.dark-theme]': 'isDark', '[class.light-theme]': '!isDark' },
  styles: [`
    :host { display: block; min-height: 100vh; }
    :host.dark-theme  { background: #0a0e1a; }
    :host.light-theme { background: #f4f6fb; }
  `]
})
export class AppComponent implements OnInit {
  isDark = false;

  constructor(
    private overlay: OverlayContainer,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.applyTheme();
  }

  onThemeChange(dark: boolean) {
    this.isDark = dark;
    this.applyTheme();
  }

  private applyTheme() {
    const cl = this.overlay.getContainerElement().classList;
    if (this.isDark) {
      cl.add('dark-theme');
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      cl.remove('dark-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
