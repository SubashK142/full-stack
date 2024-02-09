package com.boatapp.subash.Service;

import com.boatapp.subash.dto.request.RegisterRequest;
import com.boatapp.subash.dto.request.loginRequest;
import com.boatapp.subash.dto.response.LoginResponse;
import com.boatapp.subash.dto.response.RegisterResponse;

public interface AuthenticationService {
        RegisterResponse register (RegisterRequest request);

        LoginResponse login(loginRequest request);
}
