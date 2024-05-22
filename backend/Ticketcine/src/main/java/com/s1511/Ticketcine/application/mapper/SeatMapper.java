package com.s1511.Ticketcine.application.mapper;

import com.s1511.Ticketcine.application.dto.SeatDTO;
import com.s1511.Ticketcine.domain.entities.Seat;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface SeatMapper {

    SeatDTO toDTO(Seat seat);
    Seat toEntity(SeatDTO seatDTO);
}
