package com.s1511.ticketcine.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String seatNumber;

    @Column(columnDefinition = "BOOLEAN")
    private boolean reserved;
    private String functionDetailsId;
    @ManyToOne
    @JoinColumn(name = "ticket_id", referencedColumnName = "id")
    private Ticket ticket;
    @ManyToOne
    @JoinColumn(name = "current_user_id")
    private User currentUser;
    @ManyToOne
    @JoinColumn(name = "previous_user_id")
    private User previousUser;

    @Enumerated(EnumType.STRING)
    private Availability availability;

    public enum Availability {
        AVAILABLE,
        OCCUPIED,
        RESERVED
    }
}