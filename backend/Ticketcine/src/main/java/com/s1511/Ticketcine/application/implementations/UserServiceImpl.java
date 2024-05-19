package com.s1511.Ticketcine.application.implementations;

import com.s1511.Ticketcine.application.dto.user.CreateDtoUser;
import com.s1511.Ticketcine.application.dto.user.ReadDtoUser;
import com.s1511.Ticketcine.application.dto.user.UpdateDtoUser;
import com.s1511.Ticketcine.application.mapper.UserMapper;
import com.s1511.Ticketcine.application.security.JwtService;
import com.s1511.Ticketcine.domain.entities.User;
import com.s1511.Ticketcine.domain.repository.UserRepository;
import com.s1511.Ticketcine.domain.services.UserService;
import com.s1511.Ticketcine.domain.utils.RolesEnum;
import jakarta.persistence.EntityExistsException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserService {
    public final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public ReadDtoUser createUser(CreateDtoUser createDtoUser) {
        var userAlreadyExists = userRepository.findByEmail(createDtoUser.email());
        if(userAlreadyExists.isPresent()){ throw new EntityExistsException("Este email ya está en uso!"); }

        User user = this.userMapper.createDtoToUser(createDtoUser);
        user.setPassword(passwordEncoder.encode(createDtoUser.password()));
        user.setActive(Boolean.TRUE);
        user.setRole(RolesEnum.USER);
        var userAdded = userRepository.save(user);
        return  userMapper.userToReadDto(userAdded);
    }


    @Override
    public ReadDtoUser readUser(Long id) {
        return null;
    }

    @Override
    public List<ReadDtoUser> readAllUsers(Boolean active) {
        return List.of();
    }

    @Override
    public ReadDtoUser updateUser(UpdateDtoUser updateDtoUser) {
        return null;
    }

    @Override
    public Boolean toggleUser(Long id, String tokenUser) {
        return null;
    }
}
