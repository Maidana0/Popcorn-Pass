package com.s1511.Ticketcine.domain.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String title;
    private String cinema;
    private String description;
    private LocalDate releaseDate;
    private Comment comments;
    private String rate;
    private Boolean adult;
    private String image;
    private Boolean threeD;
    private Boolean subtitle;
    private Boolean active;

}
