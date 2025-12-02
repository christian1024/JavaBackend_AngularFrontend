package org.example.controller;

import org.example.model.TipoDocumentoModel;
import org.example.repository.TipoDocumentoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/TipoDoc")
@CrossOrigin(origins = "http://localhost:4200")
public class TipoDocumentoController {

    private final TipoDocumentoRepository TipoDocumentoRepository;

    public TipoDocumentoController(TipoDocumentoRepository TipoDocumentoRepository) {
        this.TipoDocumentoRepository = TipoDocumentoRepository;
    }

    @GetMapping
    public List<TipoDocumentoModel> getAll() {
        List<TipoDocumentoModel> data = TipoDocumentoRepository.findAll();
        System.out.println("Personal size = " + data.size());
        return data;
    }
}