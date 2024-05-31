package com.s1511.ticketcine.application.mapper;

import java.util.List;

import com.s1511.ticketcine.application.dto.seat.SeatDTO;
import org.mapstruct.Mapper;
import com.s1511.ticketcine.domain.entities.Seat;

@Mapper(componentModel = "spring")
public interface SeatMapper {

    SeatDTO toDTO(Seat seat);
    Seat toEntity(SeatDTO seatDTO);
    List<SeatDTO> listEntityToDto(List<Seat> seats);
}
