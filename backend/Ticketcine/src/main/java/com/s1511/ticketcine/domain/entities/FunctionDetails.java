package com.s1511.ticketcine.domain.entities;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor 
public class FunctionDetails {

    //TODO: AGREGAR CAMPOS

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private LocalDateTime schedule;
    private String movieName;

    @ManyToOne
    @JoinColumn(name = "screen_id", referencedColumnName="id")
    private Screen screen;
    @OneToMany
    private List<Seat> functionSeats;
    private Boolean active;

    

}
