package com.s1511.Ticketcine.application.dto.ticket;
import java.math.BigDecimal;

public record RequestTicketDto(
         String title,
         int quantity,
         BigDecimal unitPrice
) {
}
