package com.boatapp.subash.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boatapp.subash.model.Boat;

public interface BoatRepository extends JpaRepository<Boat,String>{

}
