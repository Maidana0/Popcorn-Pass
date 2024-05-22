package com.s1511.Ticketcine.domain.repository;

import com.s1511.Ticketcine.domain.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie,String> {

    Optional<Movie> findById(String id);

    Optional<Movie> findByTitle(String title);

    List<Movie> findByReleaseDate(LocalDateTime time);

    //List<Movie> findByGender(String gender);

    List<Movie> findByAdult(Boolean agePlus18);

    List<Movie> findByThreeD(Boolean threeD);


}
