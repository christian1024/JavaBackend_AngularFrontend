package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    // 👉 Genera hashes al arrancar la app (solo para imprimir y copiar)
    @Bean
    CommandLineRunner initPasswords() {
        return args -> {
            var encoder = new BCryptPasswordEncoder();
            System.out.println("Hash para 1234  = " + encoder.encode("1234"));
            System.out.println("Hash para admin = " + encoder.encode("admin"));
            System.out.println("Hash para prueba= " + encoder.encode("prueba"));
        };
    }
}
