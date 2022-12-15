package com.project.medications.db.repositories;

import com.project.medications.db.entities.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Date;
import java.util.List;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long> {
  List<Appointment> findByDoctorIdAndDateLessThanEqualAndDateGreaterThanEqual(
      @Param("doctorId") Long doctorId,
      @Param("endDate") Date endDate,
      @Param("startDate") Date startDate);

  List<Appointment> findByPatientIdAndDateLessThanEqualAndDateGreaterThanEqual(
      @Param("patientId") Long patientId,
      @Param("endDate") Date endDate,
      @Param("startDate") Date startDate);

  List<Appointment> findByPatientId(@Param("patientId") Long patientId);
}
