package org.example.dto;
import java.time.LocalDate;

public record PersonalDto(
        Long id,
        String nombre,
        String apellido,
        String tipoDocumentoNombre,
        String numeroDocumento,
        String cargoNombre,
        String email,
        String telefono,
        LocalDate fechaIngreso,
        String estado
) {}
