package com.s1511.ticketcine.application.mapper;

import com.s1511.ticketcine.application.dto.cinema.ReadDtoCinema;
import com.s1511.ticketcine.domain.entities.Cinema;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CinemaMapper {
    ReadDtoCinema toDto(Cinema cinema);
    List<ReadDtoCinema> ListToReadDtoList(List<Cinema> cinemaList);
}
