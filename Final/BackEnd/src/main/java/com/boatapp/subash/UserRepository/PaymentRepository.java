package com.boatapp.subash.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boatapp.subash.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String> {

}
