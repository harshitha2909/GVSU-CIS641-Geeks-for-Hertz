package com.project.medications.db.repositories;

import com.project.medications.db.entities.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
  List<Doctor> findByNameContaining(String name);
  List<Doctor> findBySpecializationContaining(String name);
}
