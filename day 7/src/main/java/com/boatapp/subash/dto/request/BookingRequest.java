package com.boatapp.subash.dto.request;




import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
  

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private String id;
    private Integer noOfPersons;
    private String fromDate;
    private String toDate;
    private Double totalPrice;
}
