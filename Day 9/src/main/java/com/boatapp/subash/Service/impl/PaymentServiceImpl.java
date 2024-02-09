package com.boatapp.subash.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.boatapp.subash.Service.PaymentService;

import com.boatapp.subash.UserRepository.PaymentRepository;

import com.boatapp.subash.dto.request.PaymentRequest;
import com.boatapp.subash.dto.response.BasicResponse;

import com.boatapp.subash.dto.response.PaymentResponse;

import com.boatapp.subash.model.Payment;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{
     private final PaymentRepository payRepository;

     @Override
     public BasicResponse<PaymentResponse> getAllUser() {
         List<Payment> payments = payRepository.findAll();
         List<PaymentResponse> payResponses = payments.stream().map(payment -> PaymentResponse.builder()
                 .paymentId(payment.getPaymentId())
                 .bookingId(payment.getBookingId())
                 .amount(payment.getAmount())
                 .paymentDate(payment.getPaymentDate())
                 .paymentMethod(payment.getPaymentMethod())
                 .build())
                 .collect(Collectors.toList());
 
         return BasicResponse.<PaymentResponse>builder()
                 .message("Payment Data fetched").data(payResponses).build();
     }

     @SuppressWarnings("null")
    @Override
    public PaymentResponse createPay(PaymentRequest request) {
        var pay = Payment.builder()
        .paymentId(request.getPaymentId())
        .bookingId(request.getBookingId())
        .amount(request.getAmount())
        .paymentDate(request.getPaymentDate())
        .paymentMethod(request.getPaymentMethod())
        .build();
        payRepository.save(pay);
        return PaymentResponse.builder()  
        .message("Slot Booked sucessfully")  
                .build();
    }
     
}
