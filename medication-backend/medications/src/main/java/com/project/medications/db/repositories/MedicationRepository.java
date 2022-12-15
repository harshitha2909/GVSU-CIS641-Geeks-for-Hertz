package com.project.medications.db.repositories;

import com.project.medications.db.entities.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicationRepository extends JpaRepository<Appointment, Long> {}
