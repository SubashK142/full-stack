package com.boatapp.subash.dto.request;




import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoatRequest {
    private String id;
    private String boatname;
    private String boatimage;
    private String boatlocation;
    private Integer boatavailable;
    private Double price;
}
