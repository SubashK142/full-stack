package com.boatapp.subash.Service.impl;

import com.boatapp.subash.Service.BookingService;


import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.boatapp.subash.UserRepository.BookingRepository;
import com.boatapp.subash.dto.request.BookingRequest;
import com.boatapp.subash.dto.response.BasicResponse;
import com.boatapp.subash.dto.response.BookingResponse;

import com.boatapp.subash.model.Booking;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService{

    private final BookingRepository bookRepository;
   
    @Override
public BasicResponse<BookingResponse> getAllUser() {
    List<Booking> users = bookRepository.findAll();

    List<BookingResponse> userResponses = users.stream()
        .map((Booking book) -> BookingResponse.builder()
                .id(book.getId())
                .noOfPersons(book.getNoOfPersons())
                .fromDate(book.getFromDate())
                .toDate(book.getToDate())
                .totalPrice(book.getTotalPrice())
                .build())
        .collect(Collectors.toList());

    return BasicResponse.<BookingResponse>builder()
        .message("User Data fetched")
        .data(userResponses)
        .build();
}





    @SuppressWarnings("null")
    @Override
    public BookingResponse createBook(BookingRequest request) {
        var book = Booking.builder()
        .id(request.getId())
        .noOfPersons(request.getNoOfPersons())
        .fromDate(request.getFromDate())
        .toDate(request.getToDate())
        .totalPrice(request.getTotalPrice())
        .build();
        bookRepository.save(book);
        return BookingResponse.builder()  
        .message("Slot Booked sucessfully")  
                .build();
    }

    @SuppressWarnings("null")
    @Override
    public BasicResponse<BookingResponse> deletebook(String bookId) {
        if (bookRepository.existsById(bookId)) {
            bookRepository.deleteById(bookId);
            return BasicResponse.<BookingResponse>builder()
                .message("Book deleted successfully")
                .build();
        } else {
            return BasicResponse.<BookingResponse>builder()
                .message("Book not found with ID: " + bookId)
                .build();
        }
    }


    @SuppressWarnings("null")
    @Override
        public BookingResponse updatebook(String bookId, BookingRequest request) {
            if (bookRepository.existsById(bookId)) {
                Booking existingbook = bookRepository.findById(bookId).orElse(null);
                if (existingbook != null) {
                    existingbook.setId(request.getId());
                    existingbook.setNoOfPersons(request.getNoOfPersons());
                    existingbook.setFromDate(request.getFromDate());
                    existingbook.setToDate(request.getToDate());
                    existingbook.setTotalPrice(request.getTotalPrice());

                    // existingGift.setGift_category(request.getGift_category());
                    bookRepository.save(existingbook);
                    return BookingResponse.builder()
                        .message("Booking updated successfully")
                        .build();
                } else {
                    return BookingResponse.builder()
                        .message("Failed to update Book. Book not found with ID: " + bookId)
                        .build();
                }
            } else {
                return BookingResponse.builder()
                    .message("Failed to update Book. Book not found with ID: " + bookId)
                    .build();
       }
}



}


 