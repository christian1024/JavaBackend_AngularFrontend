
# Sistema de Gestión de Personal

!Java
[Spring Boot
!Angular
[![TailwindCSS](https://img.sher

Aplicación web para gestionar empleados y usuarios, con autenticación JWT y diseño moderno usando Angular + TailwindCSS.

---

## 🚀 Tecnologías
- **Backend:** Java 23, Spring Boot 3.3.4, Spring Security, JWT, Hibernate, SQL Server
- **Frontend:** Angular 21, TailwindCSS
- **Base de datos:** SQL Server

---

## ✅ Requisitos previos
- Java 23
- Maven 3.8+
- Node.js 18+
- Angular CLI
- SQL Server instalado y corriendo

---

## ⚙️ Instalación y Configuración

### 🔹 Backend
1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/tu-repo.git
    cd backend
2. Configura application.properties:
    ```bash
    spring.datasource.url=jdbc:sqlserver://**tuhost**:**tupuerto**;databaseName=**tudb**
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_password
    spring.jpa.hibernate.ddl-auto=update
    jwt.secret=esta_es_una_clave_secreta_de_32+_caracteres_para_hmac_sha_256!!
3. Instala dependencias y ejecuta
    ```bash    
    mvn clean install
    mvn spring-boot:run
### 🔹 Frontend
1. Ve a la carpeta del frontend:
    ```bash    
    cd frontend
2. Instala dependencias:
    ```bash    
    npm install
  El frontend estará en: http://localhost:4200
## 🔐 Autenticación
1. Login:
    POST /auth/login
    * Body: { "username": "admin", "password": "1234" }
    * Respuesta: { "token": "eyJhbGciOiJIUzI1NiJ9..." }
- **Usa el token en todas las peticiones protegidas**

## 📌 Funcionalidades
- ✅ CRUD de Personal
- ✅ Asignación de Usuarios a personal existente
- ✅ Seguridad con JWT (sin formularios tradicionales)

## 📚 API Endpoints Detallados
1. 🔐 Autenticación


| Método | Endpoint             | Descripción                     | Ejemplo Body                                                                                                                                                                                                                 |
|--------|----------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POST   | /auth/login          | Autenticación y token JWT       | `{ "username": "admin", "password": "1234" }`                                                                                                                                                                                |
| GET    | /api/personal        | Listar empleados                | N/A                                                                                                                                                                                                                          |
| POST   | /api/personal        | Crear empleado                  | `{ "nombre": "Juanito", "apellido": "Perez", "tipoDocumentoId": 1, "numeroDocumento": "123456789", "cargoId": 1, "email": "juanito@gmail.com", "telefono": "3110000000", "fechaIngreso": "2025-12-01", "estado": "ACTIVO" }` |
| PUT    | /api/personal/{id}   | Actualizar empleado             | Igual al POST                                                                                                                                                                                                                |
| DELETE | /api/personal/{id}   | Eliminar empleado               | N/A                                                                                                                                                                                                                          |
| GET    | /api/cargos          | Listar cargos                   | N/A                                                                                                                                                                                                                          |
| GET    | /api/TipoDoc         | Listar tipos de documento       | N/A                                                                                                                                                                                                                          |

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Haz un fork y envía un pull request.

## 📄 Licencia
Este proyecto está bajo la licencia MIT.
---

✅ **Correcciones aplicadas:**
- Badges con sintaxis correcta (`!Texto`).
- Sección **instalación paso a paso** completa.
- Configuración de `application.properties`.
- Autenticación explicada con ejemplo de request y response.
- Funcionalidades listadas.
- API Endpoints detallados con ejemplos de body.
- Licencia y contribuciones incluidas.

---
















