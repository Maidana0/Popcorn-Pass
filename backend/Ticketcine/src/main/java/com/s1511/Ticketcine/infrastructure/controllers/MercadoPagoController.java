package com.s1511.Ticketcine.infrastructure.controllers;

import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import com.s1511.Ticketcine.application.dto.ticket.RequestTicketDto;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping("/")
    ResponseEntity<String> createPreference(@RequestBody RequestTicketDto requestTicketDto)
            throws MPException, MPApiException {
        PreferenceClient client = new PreferenceClient(); //Línea de comunicación a MP.

        // Este es el objeto comprado. Por body el front manda título, cantidad y precio.
        PreferenceItemRequest item =
                PreferenceItemRequest.builder()
                        .title("Mi producto más chingón!")
                        .quantity(1)
                        .unitPrice(new BigDecimal("75"))
                        .build();

        List<PreferenceItemRequest> items = new ArrayList<>();
        items.add(item);

        PreferenceRequest request =
                PreferenceRequest.builder().items(items).notificationUrl("https://google.com").build();
        //Con la lista se hace la petición, que funciona como cuerpo del post a MP.
        Preference  preferenceResponse = client.create(request); //Genera el link para pagar esto (la request).
        return  ResponseEntity.ok(preferenceResponse.getInitPoint()); //Recupera el link que creó.
    }

}

/* PreferenceItemRequest item =
                PreferenceItemRequest.builder()
                .title(requestTicketDto.title())
                        .quantity(requestTicketDto.quantity())
                        .unitPrice(requestTicketDto.unitPrice())
                        .build();
                        */