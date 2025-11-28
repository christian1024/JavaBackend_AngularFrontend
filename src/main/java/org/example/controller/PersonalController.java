
package org.example.controller;

import org.example.model.Personal;
import org.example.repository.PersonalRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personal")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonalController {

    private final PersonalRepository personalRepository;

    public PersonalController(PersonalRepository personalRepository) {
        this.personalRepository = personalRepository;
    }
    @GetMapping
    public List<Personal> getAll() {
        return personalRepository.findAll();
    }

}
