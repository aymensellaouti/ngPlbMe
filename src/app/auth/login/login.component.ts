import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../dto/credentials.dto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);

  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error("Veuillez vérifier vos identifiants");
      }
    })
  }
}
