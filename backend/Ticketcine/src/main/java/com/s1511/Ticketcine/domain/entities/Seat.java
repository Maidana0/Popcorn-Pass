package com.s1511.Ticketcine.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "seats")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seat {

    @Id
    private Long id;

    private String seatNumber;
    private boolean reserved;
    private LocalDateTime reservationTime;
}