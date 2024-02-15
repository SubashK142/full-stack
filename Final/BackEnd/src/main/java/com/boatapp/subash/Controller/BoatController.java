package com.boatapp.subash.Controller;


import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import static com.boatapp.subash.Utils.MyConstant.Boat;
import static com.boatapp.subash.Utils.MyConstant.UserBoat;
import static com.boatapp.subash.Utils.MyConstant.postboat;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boatapp.subash.Service.BoatService;
import com.boatapp.subash.Service.BookingService;
import com.boatapp.subash.dto.request.BoatRequest;
import com.boatapp.subash.dto.request.BookingRequest;
import com.boatapp.subash.dto.request.PaymentRequest;
import com.boatapp.subash.dto.response.BasicResponse;
import com.boatapp.subash.dto.response.BoatResponse;
import com.boatapp.subash.dto.response.BookingResponse;
import com.boatapp.subash.dto.response.PaymentResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Boat)
@RequiredArgsConstructor
public class BoatController {
    private final BoatService boatService;
    

    @GetMapping(UserBoat)
    public ResponseEntity<BasicResponse<BoatResponse>> getUser(){
        BasicResponse<BoatResponse> response=new BasicResponse<>();
        try{
            response=boatService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

       @PostMapping(postboat)
    public ResponseEntity<BoatResponse> createPayment(@RequestBody BoatRequest request) {
        BoatResponse response = new BoatResponse();
        try {
            response = boatService.createBoat(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
