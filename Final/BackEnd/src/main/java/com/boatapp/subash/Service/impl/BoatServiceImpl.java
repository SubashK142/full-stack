package com.boatapp.subash.Service.impl;


import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.boatapp.subash.Service.BoatService;
import com.boatapp.subash.UserRepository.BoatRepository;
import com.boatapp.subash.dto.request.BoatRequest;
import com.boatapp.subash.dto.request.BookingRequest;
import com.boatapp.subash.dto.response.BasicResponse;
import com.boatapp.subash.dto.response.BoatResponse;
import com.boatapp.subash.dto.response.BookingResponse;
import com.boatapp.subash.model.Boat;
import com.boatapp.subash.model.Booking;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class BoatServiceImpl implements BoatService{
     private final BoatRepository boatRepository;
   
    @Override
public BasicResponse<BoatResponse> getAllUser() {
    List<Boat> users = boatRepository.findAll();

    List<BoatResponse> boatResponses = users.stream()
        .map((Boat boat) -> BoatResponse.builder()
              .id(boat.getId())
              .boatname(boat.getBoatname()) 
              .boatimage(boat.getBoatimage())
              .boatlocation(boat.getBoatlocation())
              .boatavailable(2)
              .price(boat.getPrice())
              .build())
        .collect(Collectors.toList());

    return BasicResponse.<BoatResponse>builder()
        .message("User Data fetched")
        .data(boatResponses)
        .build();
}

        @SuppressWarnings("null")
    @Override
    public BoatResponse createBoat(BoatRequest request) {
        var book = Boat.builder()
        .id(request.getId())
        .boatname(request.getBoatname()) 
        .boatimage(request.getBoatimage())
        .boatlocation(request.getBoatlocation())
        .boatavailable(3)
        .price(request.getPrice())
        .build();
        boatRepository.save(book);
        return BoatResponse.builder()  
        .message("Boat Booked sucessfully")  
                .build();
    }

}
