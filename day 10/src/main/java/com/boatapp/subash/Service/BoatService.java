package com.boatapp.subash.Service;

import com.boatapp.subash.dto.request.BoatRequest;
import com.boatapp.subash.dto.response.BasicResponse;
import com.boatapp.subash.dto.response.BoatResponse;

public interface BoatService {

    BasicResponse<BoatResponse> getAllUser();

    BoatResponse createBoat(BoatRequest request);

}
