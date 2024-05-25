package com.s1511.Ticketcine.application.implementations;
import com.s1511.Ticketcine.application.dto.Seat.SeatDTO;
import com.s1511.Ticketcine.application.dto.screen.CreateDtoScreen;
import com.s1511.Ticketcine.application.dto.screen.ReadDtoScreen;
import com.s1511.Ticketcine.application.dto.screen.UpdateDtoScreen;
import com.s1511.Ticketcine.application.mapper.ScreenMapper;
import com.s1511.Ticketcine.domain.entities.Screen;
import com.s1511.Ticketcine.domain.repository.ScreenRepository;
import com.s1511.Ticketcine.domain.services.ScreenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScreenServiceImpl implements ScreenService {
    @Autowired
    private ScreenRepository screenRepository;
    @Autowired
    private ScreenMapper screenMapper;
    @Override
    public ReadDtoScreen createScreen(CreateDtoScreen createDtoScreen) {
        Screen screen = screenMapper.createDtoToScreen(createDtoScreen);
        Screen savedScreen = screenRepository.save(screen);
        return screenMapper.screenToReadDto(savedScreen);
    }
    @Override
    public ReadDtoScreen getScreenByIdAndName(String id, String name) {
        Screen screen = screenRepository.findByIdAndName(id,name).orElseThrow(() -> new RuntimeException("Screen not found"));
        if (!screen.getActive()) {
            throw new RuntimeException("Screen is inactive");
        }
        return screenMapper.screenToReadDto(screen);
    }

    @Override
    public List<ReadDtoScreen> getAllScreens() {
        List<Screen> screenList = screenRepository.findAll()
                .stream()
                .filter(Screen::getActive)
                .collect(Collectors.toList());

        return screenMapper.screenListToReadDtoList(screenList);
    }

    @Override
    public ReadDtoScreen updateScreen(String id, UpdateDtoScreen updateDtoScreen) {
        Screen screen = screenRepository.findById(id).orElseThrow(() -> new RuntimeException("Screen not found"));
        screen.setName(updateDtoScreen.getName());
        screen.setSeat(screenMapper.seatDTOToSeat(updateDtoScreen.getSeat()));
        screen.setActive(updateDtoScreen.getActive());
        Screen updatedScreen = screenRepository.save(screen);
        return screenMapper.screenToReadDto(updatedScreen);
    }

    @Override
    public void deleteScreen(String id) {
        if (!screenRepository.existsById(id)) {
            throw new RuntimeException("Screen not found");
        }
        screenRepository.deleteById(id);
    }

    //TODO: TRAER LISTA DE BUTACAS
    @Override
    public List<SeatDTO> selectTypeScreen(String idCinema, String typeScreen) {

        
        throw new UnsupportedOperationException("Unimplemented method 'selectTypeScreen'");
    }
}

