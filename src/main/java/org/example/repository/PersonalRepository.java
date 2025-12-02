package org.example.repository;
import org.example.model.Personal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalRepository extends JpaRepository<Personal, Long> {
    // Ejemplos:
    // List<Personal> findByEstado(String estado);
    // Optional<Personal> findByNumeroDocumento(String numeroDocumento);
}
