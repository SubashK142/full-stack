package com.boatapp.subash.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Booking")


public class Booking {
    @Id
    @Column(nullable = false)
    private String id;
    
    @Column(nullable = false)
    private Integer noOfPersons;
    
    @Column(nullable = false)
    private String fromDate;
    
    @Column(nullable = false)
    private String toDate;
    
    @Column(nullable = false)
    private Double totalPrice;

 
 
}
