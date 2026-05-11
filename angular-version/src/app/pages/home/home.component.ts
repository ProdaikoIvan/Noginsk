import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private i18n: I18nService) {}

  get t() {
    return this.i18n.translate();
  }

  get homeData() {
    return this.t.home;
  }

  navigateToRegister(): void {
    // Navigation will be handled by routerLink in template
  }
}
