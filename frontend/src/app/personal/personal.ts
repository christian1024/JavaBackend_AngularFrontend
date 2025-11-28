
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalService, Personal } from '../Services/personal.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './personal.html',
  styleUrls: ['./personal.css']
})
export class PersonalComponent implements OnInit {
  showModal = false;
  personalList: Personal[] = [];

  form = {
    nombre: '',
    apellido: '',
    documento: '',
    cargo: '',
    departamento: '',
    email: '',
    telefono: '',
    fechaIngreso: ''
  };

  constructor(private personalService: PersonalService) {}

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado() {
    /*this.personalService.getPersonal().subscribe({
      next: data => this.personalList = data,
      error: err => console.error('Error cargando personal', err)
    });*/

    this.personalService.getPersonal().subscribe({
      next: data => {
        console.log('Datos recibidos:', this.personalList);
        this.personalList = data;
      },
      error: err => console.error('Error cargando personal', err)
    });

  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  guardar() {
    // Aquí puedes implementar POST al backend
    console.log('Datos a guardar:', this.form);
    this.closeModal();
  }
}
