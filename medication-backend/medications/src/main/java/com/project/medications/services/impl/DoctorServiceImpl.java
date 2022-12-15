package com.project.medications.services.impl;

import com.project.medications.db.entities.Doctor;
import com.project.medications.db.repositories.DoctorRepository;
import com.project.medications.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class DoctorServiceImpl implements DoctorService {
  private final DoctorRepository doctorRepository;

  @Override
  public List<Doctor> findDoctorsByName(String name) {
    return doctorRepository.findByNameContaining(name.toLowerCase(Locale.ROOT));
  }

  @Override
  public List<Doctor> findDoctorsBySpecialization(String specialization) {
    return doctorRepository.findBySpecializationContaining(specialization.toLowerCase(Locale.ROOT));
  }
}
