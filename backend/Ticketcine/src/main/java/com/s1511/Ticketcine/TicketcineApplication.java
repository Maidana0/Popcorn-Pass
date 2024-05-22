package com.s1511.Ticketcine;

import com.mercadopago.MercadoPagoConfig;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@SecurityScheme(name = "Bearer Authentication", scheme = "bearer",bearerFormat ="JWT" , type = SecuritySchemeType.HTTP, in = SecuritySchemeIn.HEADER)

public class TicketcineApplication {

	public static void main(String[] args) {
		//Setteo del token de MP para usar la api.
		MercadoPagoConfig.setAccessToken("TEST-5219216612661848-052215-e8601d1c2f115cf466c9ce9d005493de-1370430847");

		SpringApplication.run(TicketcineApplication.class, args);
	}

}
