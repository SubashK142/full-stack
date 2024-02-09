package com.boatapp.subash.Service;


import com.boatapp.subash.dto.request.PaymentRequest;
import com.boatapp.subash.dto.response.BasicResponse;

import com.boatapp.subash.dto.response.PaymentResponse;

public interface PaymentService {
    BasicResponse<PaymentResponse>getAllUser();

    PaymentResponse createPay(PaymentRequest request);
}
