import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-archivo-clinic',
  standalone: true,
  imports: [],
  templateUrl: './archivo-clinic.component.html',
  styleUrl: './archivo-clinic.component.css'
})
export default class ArchivoClinicComponent {
  tabla_archive: any;
  constructor(){}

  form: FormGroup = new FormGroup
  ({
   expediente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    ap_paterno: new FormControl('', Validators.required),
    ap_materno: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    elabora: new FormControl('', Validators.required),
    matri: new FormControl('', Validators.required),
  });
  
  agregarData(){
    
      }  
      resetForm(){
        this.form.reset();
      }
    }

