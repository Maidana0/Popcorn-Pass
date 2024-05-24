package com.s1511.Ticketcine.domain.repository;

import com.s1511.Ticketcine.domain.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie,String> {

    Optional<Movie> findByIdAndActive(String id, Boolean active);

    Optional<Movie> findByTitleAndActive(String title, Boolean active);

    List<Movie> findByReleaseDateAndActive(LocalDateTime time, Boolean active);

    //List<Movie> findByGenreAndActive(String genre, Boolean active);

    List<Movie> findByAdultAndActive(Boolean agePlus18, Boolean active);

    List<Movie> findByThreeDAndActive(Boolean threeD, Boolean active);

   List<Movie> findBySubtitleAndActive(Boolean subtitle, Boolean active);

    List<Movie> findByActive(Boolean active);


}
