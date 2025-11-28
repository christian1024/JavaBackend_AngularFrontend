package org.example.model;


import jakarta.persistence.*;

@Entity
@Table(name = "cargo", schema = "dbo")
public class Cargo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(name = "area_id", nullable = false)
    private Long areaId;

    // Getters y Setters
}

