package com.boatapp.subash.dto.response;






import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
  

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {
    private String message;
    private String id;
    private Integer noOfPersons;
    private String fromDate;
    private String toDate;
    private Double totalPrice;
  
    
}
