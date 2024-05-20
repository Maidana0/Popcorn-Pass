package com.s1511.Ticketcine.domain.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class ReportedComment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String commentId;
    private String infractorUserId;
    private LocalDateTime commentDate;
    private Boolean checked;
    private String result;
}
