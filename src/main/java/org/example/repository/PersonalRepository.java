package org.example.repository;
import org.example.model.Personal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PersonalRepository extends JpaRepository<Personal, Long> {

    @Query("""
        SELECT p FROM Personal p
        LEFT JOIN FETCH p.tipoDocumento
        LEFT JOIN FETCH p.cargo        
    """)
    List<Personal> findAllWithJoins();

    @Query("""
        SELECT p FROM Personal p
        LEFT JOIN FETCH p.tipoDocumento
        LEFT JOIN FETCH p.cargo
        WHERE p.id = :id and p.estado='ACTIVO'
            
    """)
    Optional<Personal> findByIdWithJoins(@Param("id") Long id);

}
