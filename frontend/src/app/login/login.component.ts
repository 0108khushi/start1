import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post(`${environment.apiBaseUrl}/login`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => this.message = res.message,
      error: (err) => this.message = err.error?.error || 'Login failed'
    });
  }
}
