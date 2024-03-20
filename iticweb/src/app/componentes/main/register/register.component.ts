import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  
  auth_error = ''
  isAuthenticated: boolean = true;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 25;
  enviado: boolean = true;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.enviarBackend();
  }

  enviarBackend(): void {
    // Accede a los valores de los inputs a través de la referencia local
    const nombre = (document.getElementById('nom') as HTMLInputElement).value;
    const apellido = (document.getElementById('cognom') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const repeat_password = (document.getElementById('repeat_password') as HTMLInputElement).value;

    const data = { nom: nombre, cognom: apellido, email: email, password: password, repeat_password: repeat_password };

    if (!this.checkErrors(data)) {
      this.isAuthenticated = false;
    } else {
      this.enviado = false;
      // Realiza una solicitud HTTP POST al backend
      this.http.post('http://localhost:3000/register/userRegister', data)
      .subscribe((response: any) => {
        // Intenta obtener la propiedad 'success' de la respuesta
        this.isAuthenticated = response && response.success == true;

        // Redirige a la ruta /home solo si el usuario está autenticado
        if (this.isAuthenticated) {
          document.cookie = `email=${data.email}; expires=${new Date(Date.now() + 864e5).toUTCString()}; path=/`;
          this.router.navigate(['/home']);
        } else {
          // Manejar el caso en el que la autenticación falla, por ejemplo, mostrar un mensaje de error.
          console.error('Autenticación fallida');
        }
      });
    }
  }

  checkErrors(data: { nombre?: string; apellido?: string; email?: string; password: any; repeat_password: any; }): boolean {
    let success = true; // Bandera para seguir el estado de los errores
  
    // Inputs vacíos y otros errores
    Object.entries(data).forEach(el => {
      // Campos vacíos
      if (el[1] == '') {
        this.auth_error = "Error: Los campos no pueden estar vacíos!";
        success = false;
        let input = document.getElementById(el[0]) as HTMLInputElement;
        input.style.borderColor = 'red';
      }
      // Correo no @iticbcn.cat
      else if (el[0] == 'email' && !el[1].includes('@iticbcn.cat')) {
        this.auth_error = "Error: El correo no es un correo del centro!";
        success = false;
        let input = document.getElementById(el[0]) as HTMLInputElement;
        input.style.borderColor = 'red';
      } else {
        let input = document.getElementById(el[0]) as HTMLInputElement;
        input.style.borderColor = '#e5e5e5';
      }
    });
  
    // Contraseñas no iguales
    if (data.password != data.repeat_password) {
      this.auth_error = "Error: Las contraseñas no son iguales!";
      success = false;
  
      let input_p = document.getElementById('password') as HTMLInputElement;
      input_p.style.borderColor = 'red';
      let input_r_p = document.getElementById('repeat_password') as HTMLInputElement;
      input_r_p.style.borderColor = 'red';
    }
    
    return success; // Devuelve true si no hay errores, false si hay errores
  }
  
}

