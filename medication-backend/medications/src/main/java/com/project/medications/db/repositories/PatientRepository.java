package com.project.medications.db.repositories;

import com.project.medications.db.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
  Patient findByEmail(String email);
}
