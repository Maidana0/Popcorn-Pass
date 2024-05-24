package com.s1511.Ticketcine;

import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import com.s1511.Ticketcine.domain.repository.CinemaRepository;
import com.s1511.Ticketcine.domain.repository.ScreenRepository;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Scraping {

    private final CinemaRepository cinemaRepository;
    private final ScreenRepository screenRepository;

    public void fetchAndStoreData () throws IOException{
        String url = "https://www.sinca.gob.ar/DatosBasicosEntidades.aspx?Id=291";
        Document doc = Jsoup.connect(url).get();

        System.out.println(doc.html());
    }
    
}
