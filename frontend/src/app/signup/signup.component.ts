import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  signup() {
    this.http.post(`${environment.apiBaseUrl}/signup`, {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => this.message = res.message,
      error: (err) => this.message = err.error?.error || 'Signup failed'
    });
  }
}
