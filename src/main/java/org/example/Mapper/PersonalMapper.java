package org.example.Mapper;
import org.example.dto.PersonalDto;
import org.example.model.Personal;

public class PersonalMapper {
    public static PersonalDto toDto(Personal p) {
        return new PersonalDto(
                p.getId(),
                p.getNombre(),
                p.getApellido(),
                p.getTipoDocumento() != null ? p.getTipoDocumento().getNombre() : null,
                p.getNumeroDocumento(),
                p.getCargo() != null ? p.getCargo().getNombre() : null,
                p.getEmail(),
                p.getTelefono(),
                p.getFechaIngreso(),
                p.getEstado()
        );

    }
}
