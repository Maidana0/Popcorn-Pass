package com.s1511.Ticketcine.application.dto.mercadopago;

public record MercadoPagoResponse(
        String action,
        Resource data,
        String Type
) {
}