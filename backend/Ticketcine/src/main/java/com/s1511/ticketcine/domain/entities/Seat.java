package com.s1511.ticketcine.domain.entities;

import com.s1511.ticketcine.domain.utils.SeatEnum;
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
    private LocalDateTime reservationTime;
    private Boolean occupied = false;
    private String functionDetailsId;
    @ManyToOne
    @JoinColumn(name = "ticket_id", referencedColumnName = "id")
    private Ticket ticket;
    @ManyToOne
    @JoinColumn(name = "current_user_id", referencedColumnName = "id")
    private User currentUser;
    @ManyToOne
    @JoinColumn(name = "previous_user_id", referencedColumnName = "id")
    private User previousUser;
    SeatEnum seatEnum;


}