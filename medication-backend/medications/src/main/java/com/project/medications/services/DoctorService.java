package com.project.medications.services;

import com.project.medications.db.entities.Doctor;

import java.util.List;

public interface DoctorService {
   List<Doctor> findDoctorsByName(String name);
   List<Doctor> findDoctorsBySpecialization(String specialization);
}
