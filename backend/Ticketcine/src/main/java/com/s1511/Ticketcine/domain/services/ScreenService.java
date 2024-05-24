package com.s1511.Ticketcine.domain.services;
import com.s1511.Ticketcine.application.dto.Seat.SeatDTO;
import com.s1511.Ticketcine.application.dto.screen.CreateDtoScreen;
import com.s1511.Ticketcine.application.dto.screen.ReadDtoScreen;
import com.s1511.Ticketcine.application.dto.screen.UpdateDtoScreen;

import java.util.List;

public interface ScreenService {
    ReadDtoScreen createScreen(CreateDtoScreen createDtoScreen);
    ReadDtoScreen getScreenByIdAndName(String id, String name);
    List<ReadDtoScreen> getAllScreens();
    ReadDtoScreen updateScreen(String id, UpdateDtoScreen updateDtoScreen);
    void deleteScreen(String id);
    List<SeatDTO> selectTypeScreen(String idCinema, String typeScreen);
}

