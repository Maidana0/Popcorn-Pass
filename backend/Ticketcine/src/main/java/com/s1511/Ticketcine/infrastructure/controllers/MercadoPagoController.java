package com.s1511.Ticketcine.infrastructure.controllers;

import com.mercadopago.client.payment.PaymentClient;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.payment.Payment;
import com.mercadopago.resources.preference.Preference;
import com.s1511.Ticketcine.application.dto.mercadopago.MercadoPagoResponse;
import com.s1511.Ticketcine.application.dto.mercadopago.RequestTicketDto;
import com.s1511.Ticketcine.domain.services.MercadoPagoService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/mp")
@RestController
@RequiredArgsConstructor
@SecurityRequirement(name = "Bearer Authentication")
public class MercadoPagoController {

    public final MercadoPagoService mercadoPagoService;

    @PostMapping("/create")
    public ResponseEntity<String> createPreference(@RequestBody RequestTicketDto requestTicketDto)
            throws MPException, MPApiException {
        var response = mercadoPagoService.createPayment(requestTicketDto);
        return  ResponseEntity.ok(response);

    }

    @PostMapping("/response")
    public ResponseEntity<String> MercadoPagoResponse(
            @RequestBody MercadoPagoResponse mercadoPagoResponse)
            throws MPException, MPApiException {
        mercadoPagoService.processPayment(mercadoPagoResponse);
        return ResponseEntity.ok().build();
    }
}
