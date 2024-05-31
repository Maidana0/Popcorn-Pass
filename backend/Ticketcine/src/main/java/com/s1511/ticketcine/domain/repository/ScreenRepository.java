package com.s1511.ticketcine.domain.repository;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.s1511.ticketcine.domain.entities.Screen;

import java.util.List;
import java.util.Optional;

@Repository
public interface ScreenRepository extends JpaRepository <Screen, String> {
    Optional<Screen> findByIdAndActive (String id, Boolean active);
    List<Screen> findByCinemaId (String cinemaId);

    @Modifying
    @Query("UPDATE Screen s SET s.functionDetails = :functionDetails WHERE s.id = :screenId")
    void updateFunctionDetails(String screenId, List<FunctionDetails> functionDetails);

    @Query("SELECT s.functionDetails FROM Screen s WHERE s.cinema.id = :cinemaId")
    List<FunctionDetails> findFunctionDetailsByCinemaId(@Param("cinemaId") String cinemaId);

}