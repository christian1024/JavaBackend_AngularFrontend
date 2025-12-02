
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PersonalService, Personal } from '../Services/personal.service';
import { TipoDocuService } from '../Services/TipoDocu.service';
import { CargoService } from '../Services/Cargo.Service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface TipoDocumento {
  id: number;
  nombre: string;
}
interface Cargo {
  id: number;
  nombre: string;
  area_id: number;
}

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './personal.html',
  styleUrls: ['./personal.css']
})
class PersonalComponent implements OnInit {
  showModal = false;
  personalList: Personal[] = [];
  TipoDocList: TipoDocumento[] = [];
  CargoList: Cargo[] = [];
  loading = true;

  form = {
    nombre: '',
    apellido: '',
    TipDoc: '',
    documento: '',
    cargoId: '',
    email: '',
    telefono: '',
    fechaIngreso: ''
  };

  constructor(
    private personalService: PersonalService,
    private tipoDocuService: TipoDocuService,
    private CargoService: CargoService,
    private router: Router
  ) {}
  trackById(index: number, item: TipoDocumento): number {
    return item.id;
  }
  ngOnInit(): void {
    this.cargarDatos();

    // ✅ Recargar datos si el usuario vuelve a la ruta
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url.includes('personal/personal')) {
          this.cargarDatos();
        }
      });
  }

  cargarDatos() {
    this.loading = true;
    this.personalService.getAll().subscribe({
      next: (data) => {
        this.personalList = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar personal', err);
        this.loading = false;
      }
    });

    this.tipoDocuService.getAll().subscribe({
      next: (data: TipoDocumento[]) => this.TipoDocList = data,
      error: (err) => console.error('Error al cargar tipos de documento', err)
    });

    this.CargoService.getAll().subscribe({
      next: (data: CargoService[]) => this.CargoList = data,
      error: (err) => console.error('Error al cargar tipos de documento', err)
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }






  guardar() {
    const payload = {
      nombre: this.form.nombre,
      apellido: this.form.apellido,
      tipoDocumentoId: Number(this.form.TipDoc),
      numeroDocumento: this.form.documento,
      cargoId: Number(this.form.cargoId),
      email: this.form.email,
      telefono: this.form.telefono,
      fechaIngreso: this.form.fechaIngreso,
      estado: 'ACTIVO'
    };

    this.personalService.create(payload).subscribe({
      next: (response) => {
        console.log('Empleado guardado:', response);
        this.closeModal();

        // ✅ Limpiar formulario
        this.form = {
          nombre: '',
          apellido: '',
          TipDoc: '',
          documento: '',
          cargoId: '',
          email: '',
          telefono: '',
          fechaIngreso: ''
        };

        // ✅ Recargar lista y forzar detección de cambios
        this.cargarDatos();
      },
      error: (err) => {
        console.error('Error al guardar empleado:', err);
        alert('Error al guardar: ' + err.message);
      }
    });
  }



}

export default PersonalComponent
