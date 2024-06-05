package com.s1511.ticketcine.infrastructure.controllers;

import com.s1511.ticketcine.application.dto.screen.ReadDtoScreen;
import com.s1511.ticketcine.application.dto.screen.UpdateDtoScreen;
import com.s1511.ticketcine.domain.services.ScreenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/screens")
@RequiredArgsConstructor
public class ScreenController {

    private final ScreenService screenService;

    @PutMapping("/{id}")
    public ResponseEntity<ReadDtoScreen> updateScreen(@PathVariable String id, @RequestBody UpdateDtoScreen updateDtoScreen) {
        ReadDtoScreen updatedScreen = screenService.updateScreen(id, updateDtoScreen);
        return ResponseEntity.ok(updatedScreen);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScreen(@PathVariable String id) {
        screenService.deleteScreen(id);
        return ResponseEntity.noContent().build();
    }

    //TRAE SALAS POR ID CINE
   
    public ResponseEntity<List<ReadDtoScreen>> selectMovieByCine (@PathVariable String idCinema){
        List<ReadDtoScreen> dto = screenService.selectMovieByCine(idCinema);
        return ResponseEntity.ok(dto);
    }

    //TRAIGA SALAS CON IDCINE Y IDPELICULA
    @GetMapping("/selectScreen")
    public ResponseEntity<List<ReadDtoScreen>> selectScreenByCinemaIdAndMovieId(@RequestParam String cinemaId, @RequestParam String MovieId){
        List<ReadDtoScreen> screens = screenService.selectScreenByCinemaIdAndMovieId(cinemaId, MovieId);
        return ResponseEntity.ok(screens);
    }
}
