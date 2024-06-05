package com.s1511.ticketcine.application.dto.screen;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateDtoScreen {
    private String id;
    private String name;
    private Boolean active;
}

// TODO. VER SI ES NECESARIO!!