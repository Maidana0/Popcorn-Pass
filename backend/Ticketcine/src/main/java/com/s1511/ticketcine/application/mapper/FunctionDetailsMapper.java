package com.s1511.ticketcine.application.mapper;

import com.s1511.ticketcine.application.dto.functionDetails.ReadDtoFunctionDetails;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FunctionDetailsMapper {

    ReadDtoFunctionDetails functionDetailsToDto (FunctionDetails functionDetails);
    List<ReadDtoFunctionDetails> functionDetailsListToDtoList (List<FunctionDetails> functionsDetails);
}
