
package org.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "personal", schema = "dbo")
@Data
public class Personal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, length = 100)
    private String apellido;

    @Column(name = "tipo_documento_id", nullable = false)
    private Integer tipoDocumentoId;

    @Column(name = "numero_documento", nullable = false, unique = true, length = 50)
    private String numeroDocumento;

    @Column(name = "cargo_id", nullable = false)
    private Integer cargoId;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(length = 20)
    private String telefono;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "fecha_ingreso", nullable = false)
    private LocalDate fechaIngreso;

    @Column(nullable = false, length = 10)
    private String estado;

    public Personal() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }

    public Integer getTipoDocumentoId() { return tipoDocumentoId; }
    public void setTipoDocumentoId(Integer tipoDocumentoId) { this.tipoDocumentoId = tipoDocumentoId; }

    public String getNumeroDocumento() { return numeroDocumento; }
    public void setNumeroDocumento(String NumeroDocumento) { this.numeroDocumento = NumeroDocumento; }

    public Integer getCargoId() { return cargoId; }
    public void setCargoId(Integer cargoId) { this.cargoId = cargoId; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public LocalDate getFechaIngreso() { return fechaIngreso; }
    public void setFechaIngreso(LocalDate fechaIngreso) { this.fechaIngreso = fechaIngreso; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}
