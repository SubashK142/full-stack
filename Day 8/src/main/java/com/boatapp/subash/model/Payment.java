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
@Table(name = "Payments")
public class Payment {
    @Id
    @Column(nullable = false)
    private String paymentId;

    @Column(nullable = false)
    private String bookingId;  

    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false)
    private String paymentDate;
    
    @Column(nullable = false)
    private String paymentMethod; 
  

}