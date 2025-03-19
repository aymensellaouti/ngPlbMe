import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  constructor(public translateService: TranslateService) {
    // La langue par défaut ca sera le fr
    translateService.setDefaultLang('fr');
    // Les langues supportées sont en et fr
    translateService.addLangs(['en', 'fr']);
    // récupére la langue du navigateur
    const browserLang = translateService.getBrowserLang() ?? '';
    // vila ce que tu va utiliser, va récupérer la langue du browser et vérifie si elle match en ou fr
    // si oui garde la sinon prend fr
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }

  translate(langue: string) {
    this.translateService.use(langue);
  }
}
