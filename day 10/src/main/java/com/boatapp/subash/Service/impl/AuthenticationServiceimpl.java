package com.boatapp.subash.Service.impl;







import lombok.RequiredArgsConstructor;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.boatapp.subash.Service.AuthenticationService;
import com.boatapp.subash.UserRepository.UserRepository;
import com.boatapp.subash.Utils.JwtUtil;
import com.boatapp.subash.dto.request.RegisterRequest;
import com.boatapp.subash.dto.request.loginRequest;
import com.boatapp.subash.dto.response.LoginResponse;
import com.boatapp.subash.dto.response.RegisterResponse;
import com.boatapp.subash.enumerated.Role;
import com.boatapp.subash.model.User;



@Service
@RequiredArgsConstructor
@SuppressWarnings("null")

public class AuthenticationServiceimpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists =userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!")
            .build();
        }
        var user=User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER)
            .build();
            userRepository.save(user);
            return RegisterResponse.builder()
            .message("user created successfully!")
            .build();
    }
    @Override
    public LoginResponse login(loginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtUtil.generateToken(user);
        return LoginResponse
        .builder()
        .message("User logged in successfully!")
        .token(token)
        .build();
    }
}