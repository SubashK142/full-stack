package com.boatapp.subash.Service;

import com.boatapp.subash.dto.response.BasicResponse;
import com.boatapp.subash.dto.response.UserResponse;

public interface UserService {
   BasicResponse<UserResponse>getAllUser();
}
