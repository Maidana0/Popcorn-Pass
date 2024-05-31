package com.s1511.ticketcine.application.mapper;
import org.mapstruct.Mapper;
import com.s1511.ticketcine.application.dto.screen.CreateDtoScreen;
import com.s1511.ticketcine.application.dto.screen.ReadDtoScreen;

import com.s1511.ticketcine.domain.entities.Screen;


import java.util.List;
@Mapper(componentModel = "spring")
public interface ScreenMapper {
        Screen createDtoToScreen (CreateDtoScreen createDtoScreen);
        ReadDtoScreen screenToReadDto (Screen screen);
        List<ReadDtoScreen> screenListToReadDtoList (List<Screen> ScreenList);

}

