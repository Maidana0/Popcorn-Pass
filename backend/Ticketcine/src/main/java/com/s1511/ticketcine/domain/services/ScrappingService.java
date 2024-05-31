package com.s1511.ticketcine.domain.services;

import java.io.IOException;

public interface ScrappingService {
    

    //TODO: EXTRACCION DE TABLA EN PAGINA WEB. 
    //PRUEBA: Https://www.sinca.gob.ar/DatosBasicosEntidades.aspx?Id=291
    void fetchAndStoreData() throws IOException;

    //TODO: EXTRACCION DE TABLA DETALLES EN WEB ttps://www.sinca.gob.ar/DatosBasicosEntidades.aspx?Id=291
    void fetchDetailsAndStore() throws IOException;
}
