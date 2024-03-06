import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Accede a los valores de los inputs a través de la referencia local
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    // Ahora puedes hacer lo que quieras con email y password
    console.log('Email:', email);
    console.log('Contraseña:', password);
    this.enviarBackend();
  }

  enviarBackend(): void {
    // Accede a los valores de los inputs a través de la referencia local
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const data = { email: email, password: password };

    // Realiza una solicitud HTTP POST al backend
    this.http.post('http://localhost:3000/login/userLogin', data)
      .subscribe((response) => {
        // Maneja la respuesta del backend
        console.log('Respuesta del backend:', response);
      });
  }
}
