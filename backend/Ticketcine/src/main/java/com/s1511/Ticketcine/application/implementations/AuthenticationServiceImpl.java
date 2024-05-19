package com.s1511.Ticketcine.application.implementations;
import com.s1511.Ticketcine.application.dto.login.RequestLogin;
import com.s1511.Ticketcine.application.dto.login.ResponseLogin;
import com.s1511.Ticketcine.application.security.JwtService;
import com.s1511.Ticketcine.domain.repository.UserRepository;
import com.s1511.Ticketcine.domain.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public ResponseLogin login(RequestLogin data) {

        String role = "";
        String id = "";
        String token = "";

        var user = userRepository.findByEmail(data.email());
        if (user.isPresent()) {
            role = user.get().getAuthorities().toString();
            id = user.get().getId();
            token = jwtService.getToken(user.get());
        }

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(data.email(),
                        data.password()));

        ResponseLogin responseLogin = new ResponseLogin(token, role, id);

        return responseLogin;
    }

}
