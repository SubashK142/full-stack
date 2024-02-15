package com.boatapp.subash.Service;

import com.boatapp.subash.dto.request.BookingRequest;
import com.boatapp.subash.dto.response.BasicResponse;
import com.boatapp.subash.dto.response.BookingResponse;


public interface BookingService {
    BasicResponse<BookingResponse>getAllUser();

    BookingResponse createBook(BookingRequest request);

    BasicResponse<BookingResponse> deletebook(String giftid);

    BookingResponse updatebook(String giftid, BookingRequest giftRequest);
}
