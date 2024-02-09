package com.boatapp.subash.Controller;

import static com.boatapp.subash.Utils.MyConstant.PayBook;
import static com.boatapp.subash.Utils.MyConstant.Postpay;
import static com.boatapp.subash.Utils.MyConstant.USER;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boatapp.subash.Service.PaymentService;

import com.boatapp.subash.dto.request.PaymentRequest;
import com.boatapp.subash.dto.response.BasicResponse;

import com.boatapp.subash.dto.response.PaymentResponse;



import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class PaymentController {
     private final PaymentService payService;
    //   private final PaymentRepository payrepo;

    @GetMapping(PayBook)
    public ResponseEntity<BasicResponse<PaymentResponse>> getUser(){
        BasicResponse<PaymentResponse> response=new BasicResponse<>();
        try{
            response=payService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PostMapping(Postpay)
    public ResponseEntity<PaymentResponse> createPayment(@RequestBody PaymentRequest request) {
        PaymentResponse response = new PaymentResponse();
        try {
            response = payService.createPay(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  
    
}
