package org.example.service;

/*public class PersonalService {
}*/

import org.example.Mapper.PersonalMapper;
import org.example.dto.PersonalDto;
import org.example.repository.PersonalRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonalService {
    private final PersonalRepository repo;

    public PersonalService(PersonalRepository repo) { this.repo = repo; }

    public List<PersonalDto> listar() {
        return repo.findAllWithJoins()
                .stream()
                .map(PersonalMapper::toDto)
                .toList();
    }

    public Optional<PersonalDto> obtener(Long id) {
        return repo.findByIdWithJoins(id).map(PersonalMapper::toDto);
    }
}

/*@RestController
@RequestMapping("/api/personal")
@CrossOrigin // si usas Angular desde otro origen
public class PersonalController {
    private final PersonalService service;

    public PersonalController(PersonalService service) { this.service = service; }

    @GetMapping
    public List<PersonalDto> listar() { return service.listar(); }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalDto> obtener(@PathVariable Long id) {
        return service.obtener(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}*/

