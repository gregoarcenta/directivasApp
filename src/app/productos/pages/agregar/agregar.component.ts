import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  color: string = 'red'

  productoForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get errNombreMsg() {
    if (this.productoForm.controls['nombre'].getError('required'))
      return 'El nombre es requerido';
    if (this.productoForm.controls['nombre'].getError('minlength'))
      return 'El nombre tiene que tener minimo 3 caracteres';
    return ''
  }

  tieneError(campo: string) {
    return this.productoForm.get(campo)?.invalid && this.productoForm.get(campo)?.touched
  }

  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }

}
