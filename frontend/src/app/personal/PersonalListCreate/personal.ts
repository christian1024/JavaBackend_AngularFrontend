
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {PersonalDto, PersonalService} from '../../Services/personal.service';
import { TipoDocuService } from '../../Services/TipoDocu.service';
import { CargoService } from '../../Services/Cargo.Service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

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
  imports: [CommonModule, FormsModule, HttpClientModule, NgIcon],
  templateUrl: './personal.html',
  styleUrls: ['./personal.css']
})
export class PersonalComponent implements OnInit {
  showModal = false;
  personalList: PersonalDto[] = [];
  TipoDocList: TipoDocumento[] = [];
  CargoList: Cargo[] = [];
  loading = true;

  form = {
    nombre: '',
    apellido: '',
    TipDoc: '',        // select: id en string -> convertir a number
    documento: '',
    cargoId: '',       // select: id en string -> convertir a number
    email: '',
    telefono: '',
    fechaIngreso: ''   // 'YYYY-MM-DD'
  };

  constructor(
    private personalService: PersonalService,
    private tipoDocuService: TipoDocuService,
    private cargoService: CargoService, // ✅ usa camelCase
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
  }

  trackById(index: number, item: { id: number }): number {
    return item.id;
  }

  ngOnInit(): void {
    this.cargarDatos();

    // Recargar datos si vuelve a la ruta
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url.includes('personal')) {
          this.cargarDatos();
        }
      });
  }

  cargarDatos() {
    this.loading = true;
    this.personalService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.personalList = [...data];
        this.loading = false;
        this.cdr.detectChanges(); // opcional, normalmente no necesario
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

    this.cargoService.getAll().subscribe({
      next: (data: Cargo[]) => this.CargoList = data, // ✅ tipo correcto
      error: (err) => console.error('Error al cargar cargos', err)
    });
  }

  openModal() {
    this.showModal = true;
    if (!this.form.fechaIngreso) {
      this.form.fechaIngreso = this.hoyISO();
    }
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
        this.resetForm();
        this.cargarDatos();
      },
      error: (err) => {
        console.error('Error al guardar empleado:', err);
        alert('Error al guardar: ' + (err?.error?.message || err.message));
      }
    });
  }

  resetForm() {
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
  }

  hoyISO(): string {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
}


/*
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PersonalService, Personal } from '../../Services/personal.service';
import { TipoDocuService } from '../../Services/TipoDocu.service';
import { CargoService } from '../../Services/Cargo.Service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgIcon} from '@ng-icons/core';

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
  imports: [CommonModule, FormsModule, HttpClientModule, NgIcon],
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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  trackById(index: number, item: TipoDocumento): number {
    return item.id;
  }
  ngOnInit(): void {
    this.cargarDatos();

    // ✅ Recargar datos si el usuario vuelve a la ruta
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url.includes('personal')) {
          this.cargarDatos();
        }
      });
  }
  cargarDatos() {
    this.loading = true;
    this.personalService.getAll().subscribe({
      next: (data) => {
        this.personalList = [...data];
        this.loading = false;
        this.cdr.detectChanges()
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
  /!*EliminarEmpleado(id:any){
      console.log(id);
  }*!/
}
export default PersonalComponent
*/
