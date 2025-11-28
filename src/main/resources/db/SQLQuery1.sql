
CREATE TABLE tipo_documento (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);
INSERT INTO tipo_documento (nombre) VALUES ('CC'), ('NIT'), ('Pasaporte');


CREATE TABLE area (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO area (nombre) VALUES ('Sistemas'), ('QA');

CREATE TABLE cargo (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    area_id INT NOT NULL,
    FOREIGN KEY (area_id) REFERENCES area(id),
    UNIQUE(nombre, area_id) -- evita duplicados dentro del mismo departamento
);
INSERT INTO cargo (nombre, area_id) VALUES ('Desarrollador',1), ('Tester',1 );



CREATE TABLE personal (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    tipo_documento_id INT NOT NULL,
    numero_documento VARCHAR(50) NOT NULL UNIQUE,
    cargo_id INT NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefono VARCHAR(20),
    fecha_ingreso DATE NOT NULL,
    estado VARCHAR(10) NOT NULL DEFAULT 'ACTIVO' CHECK (estado IN ('ACTIVO','INACTIVO')),
    FOREIGN KEY (tipo_documento_id) REFERENCES tipo_documento(id),
    FOREIGN KEY (cargo_id) REFERENCES cargo(id)
);


INSERT INTO personal (nombre, apellido, tipo_documento_id, numero_documento, cargo_id, email, telefono, fecha_ingreso, estado) 
VALUES ('Juanito','Rodriguez',1,12345678952,1,'juanito@gmail.com',3105555555,'11/28/2025','ACTIVO');


-- Tabla personal
CREATE TABLE dbo.personal (
    id BIGINT IDENTITY(1,1) CONSTRAINT PK_personal PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    tipo_documento_id INT NOT NULL,
    numero_documento VARCHAR(50) NOT NULL CONSTRAINT UQ_personal_numdoc UNIQUE,
    cargo_id INT NOT NULL,
    email VARCHAR(150) NOT NULL CONSTRAINT UQ_personal_email UNIQUE,
    telefono VARCHAR(20),
    fecha_ingreso DATE NOT NULL,
    estado VARCHAR(10) NOT NULL 
        CONSTRAINT DF_personal_estado DEFAULT 'ACTIVO' 
        CONSTRAINT CK_personal_estado CHECK (estado IN ('ACTIVO','INACTIVO')),
    CONSTRAINT FK_personal_tipodoc FOREIGN KEY (tipo_documento_id) REFERENCES dbo.tipo_documento(id),
    CONSTRAINT FK_personal_cargo FOREIGN KEY (cargo_id) REFERENCES dbo.cargo(id)
);

-- Tabla usuario
CREATE TABLE dbo.usuario (
    id INT IDENTITY(1,1) CONSTRAINT PK_usuario PRIMARY KEY,
    personal_id BIGINT NOT NULL,
    username VARCHAR(50) NOT NULL CONSTRAINT UQ_usuario_username UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(10) NOT NULL 
        CONSTRAINT DF_usuario_rol DEFAULT 'USER' 
        CONSTRAINT CK_usuario_rol CHECK (rol IN ('ADMIN','USER')),
    CONSTRAINT FK_usuario_personal FOREIGN KEY (personal_id) 
        REFERENCES dbo.personal(id)
        -- Opcional: define el comportamiento al eliminar/actualizar personal
        -- ON DELETE NO ACTION   -- predeterminado (no permite borrar si hay usuario dependiente)
        -- ON UPDATE NO ACTION
);
