package com.s1511.Ticketcine.application.dto.mercadopago;

public record RequestTicketDto(
         String title,
         Integer quantity,
         String unitPrice
) {
}
