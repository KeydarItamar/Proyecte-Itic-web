import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated: boolean = true;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.enviarBackend();
  }

  enviarBackend(): void {
    // Accede a los valores de los inputs a través de la referencia local
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const data = { email: email, password: password };

    // Realiza una solicitud HTTP POST al backend
    this.http.post('http://localhost:3000/login/userLogin', data)
      .subscribe((response: any) => {
        // Intenta obtener la propiedad 'success' de la respuesta
        this.isAuthenticated = response && response.success == true;

        // Redirige a la ruta /home solo si el usuario está autenticado
        if (this.isAuthenticated) {
          this.router.navigate(['/home']);
        } else {
          // Manejar el caso en el que la autenticación falla, por ejemplo, mostrar un mensaje de error.
          console.error('Autenticación fallida');
        }
      });
  }
}
