package com.s1511.Ticketcine.application.implementations;

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
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MercadoPagoServiceImpl implements MercadoPagoService {

    @Override
    public String createPayment(RequestTicketDto requestTicketDto)
            throws MPException, MPApiException {
        //TODO. Aquí se genera el Ticket con todos los datos pero en active false. Devolver ID.
        PreferenceClient client = new PreferenceClient(); //Línea de comunicación a MP.

        // Este es el objeto comprado. Por body el front manda título, cantidad y precio.
        PreferenceItemRequest item =
                PreferenceItemRequest.builder()
                        .title(requestTicketDto.title())
                        .quantity(requestTicketDto.quantity())
                        .unitPrice(new BigDecimal(requestTicketDto.unitPrice()))
                        .build();

        List<PreferenceItemRequest> items = new ArrayList<>();
        items.add(item);

        //TODO. Reemplazar el 47 mágico por el id de nuestra db del ticket!!
        PreferenceRequest request =
                PreferenceRequest.builder().items(items).externalReference("47")
                        .notificationUrl("https://7c13-2803-9800-9885-50d3-7500-891c-107f-557c.ngrok-free.app/mp/response?source_news=webhooks").build();
        //Con la lista se hace la petición, que funciona como cuerpo del post a MP.
        Preference preferenceResponse = client.create(request); //Genera el link para pagar esto (la request).

        return preferenceResponse.getInitPoint(); //Recupera el link que creó.
    }

    @Override
    public void processPayment(MercadoPagoResponse mercadoPagoResponse)
            throws MPException, MPApiException {
        PaymentClient client = new PaymentClient(); //Genera cliente de consulta de pago.
        Payment payment = client.get(mercadoPagoResponse.data().id()); //Recupera el pago que hizo.
        String billId = payment.getExternalReference(); //Id de la factura/bill de esta app.
        Long paymentMP = payment.getId(); //Id de MP para este pago.
        String paymentStatus = payment.getStatus(); //Status del pago que indica MP.

        //TODO. Aquí el Ticket se pasa a Active True si el paymentStatus es approved.
        //TODO. En TicketController debería llamarse a getAllTicketsByUserId y desde ahí un getTicketById
    }
}
/* Nota de Guille hasta que esto esté en prod: Cada vez que se apaga el ngrok hay que
correr el comando de nuevo. */