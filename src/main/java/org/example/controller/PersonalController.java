
package org.example.controller;
import org.example.dto.PersonalDto;
import org.example.model.Personal;
import org.example.repository.PersonalRepository;
import org.example.service.PersonalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/personal")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonalController {

    private final PersonalService service;
    private final PersonalRepository personalRepository;


    public PersonalController(PersonalService service, PersonalRepository personalRepository) {
        this.service = service;
        this.personalRepository = personalRepository;
    }

    @GetMapping
    public List<PersonalDto> listar() { return service.listar(); }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalDto> obtener(@PathVariable Long id) {
        return service.obtener(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Personal> create(@RequestBody Personal personal) {
        Personal nuevo = personalRepository.save(personal);
        return ResponseEntity.ok(nuevo);
    }
}