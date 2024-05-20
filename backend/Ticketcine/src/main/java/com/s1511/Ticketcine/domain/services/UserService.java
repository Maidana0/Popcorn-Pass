package com.s1511.Ticketcine.domain.services;
import com.s1511.Ticketcine.application.dto.user.CreateDtoUser;
import com.s1511.Ticketcine.application.dto.user.ReadDtoUser;
import com.s1511.Ticketcine.application.dto.user.UpdateDtoUser;
import java.util.List;

public interface UserService {

    ReadDtoUser createUser(CreateDtoUser createDtoUser);
    ReadDtoUser readUserById(String id);
    ReadDtoUser readUserByEmail(String email);
    List<ReadDtoUser> readAllUsers (Boolean active); //No estoy seguro que lo necesitemos!!
    ReadDtoUser updateUser(UpdateDtoUser updateDtoUser);
    Boolean toggleUser(Long id, String tokenUser);
}
