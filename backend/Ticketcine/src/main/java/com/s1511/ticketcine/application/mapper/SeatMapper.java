package com.s1511.ticketcine.application.mapper;

import java.util.List;

import com.s1511.ticketcine.application.dto.seat.ResponseDtoSeat;
import org.mapstruct.Mapper;
import com.s1511.ticketcine.domain.entities.Seat;

@Mapper(componentModel = "spring")
public interface SeatMapper {

    ResponseDtoSeat toDTO(Seat seat);
    Seat toEntity(ResponseDtoSeat responseDtoSeat);
    List<ResponseDtoSeat> listEntityToDto(List<Seat> seats);
}
