package com.s1511.Ticketcine.infrastructure.controllers;
import com.s1511.Ticketcine.application.dto.screen.CreateDtoScreen;
import com.s1511.Ticketcine.application.dto.screen.ReadDtoScreen;
import com.s1511.Ticketcine.application.dto.screen.UpdateDtoScreen;
import com.s1511.Ticketcine.domain.services.ScreenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/screens")
public class ScreenController {
    @Autowired
    private ScreenService screenService;

    @PostMapping
    public ResponseEntity<ReadDtoScreen> createScreen(@RequestBody CreateDtoScreen createDtoScreen) {
        ReadDtoScreen createdScreen = screenService.createScreen(createDtoScreen);
        return ResponseEntity.ok(createdScreen);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReadDtoScreen> getScreenById(@PathVariable String id, String name) {
        ReadDtoScreen screen = screenService.getScreenByIdAndName(id, name);
        return ResponseEntity.ok(screen);
    }

    @GetMapping
    public ResponseEntity<List<ReadDtoScreen>> getAllScreens() {
        List<ReadDtoScreen> screens = screenService.getAllScreens();
        return ResponseEntity.ok(screens);
    }

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
}