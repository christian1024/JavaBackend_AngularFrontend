package org.example.repository;
import org.example.model.TipoDocumentoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoDocumentoRepository extends JpaRepository<TipoDocumentoModel, Long> {
}
