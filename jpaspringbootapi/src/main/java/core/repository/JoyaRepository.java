package core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import core.model.Joya;

@Repository
public interface JoyaRepository extends JpaRepository<Joya, Long> {

}
