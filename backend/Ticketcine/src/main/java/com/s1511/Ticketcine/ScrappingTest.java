package com.s1511.Ticketcine;

import java.io.IOException;

public class ScrappingTest {

    public static void main(String[] args) throws IOException {
        Scraping scraping = new Scraping(null, null);
        scraping.fetchAndStoreData();
    }
    
}
