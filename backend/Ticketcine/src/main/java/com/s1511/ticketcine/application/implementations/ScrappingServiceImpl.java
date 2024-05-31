package com.s1511.ticketcine.application.implementations;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.s1511.ticketcine.domain.services.ScrappingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ScrappingServiceImpl implements ScrappingService{

    //TODO: VER A QUE REPOSITORY USAR. FUNCTIONDETAILS,SCREEN,CINEMA,SEAT

    @Override
    public void fetchAndStoreData() throws IOException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'fetchAndStoreData'");
    }

    @Override
    public void fetchDetailsAndStore() throws IOException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'fetchDetailsAndStore'");
    }
    
}
