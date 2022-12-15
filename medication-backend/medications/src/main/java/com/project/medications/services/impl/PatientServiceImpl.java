package com.project.medications.services.impl;

import com.project.medications.configuration.TokenInfo;
import com.project.medications.db.entities.Patient;
import com.project.medications.db.repositories.PatientRepository;
import com.project.medications.pojos.User;
import com.project.medications.security.helpers.TokenHelper;
import com.project.medications.services.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
  private final PatientRepository patientRepository;
  private final TokenHelper tokenHelper;
  private final BCryptPasswordEncoder passwordEncoder;

  @Override
  public TokenInfo createNewPatient(Patient user) {
    Patient existingPatient = patientRepository.findByEmail(user.getEmail());
    if (existingPatient == null) {
      user.setPassword(passwordEncoder.encode(user.getPassword()));
      patientRepository.save(user);
      return new TokenInfo(tokenHelper.createToken(new User(user.getEmail(), user.getPassword())));
    }
    throw new RuntimeException("Patient already exists, try to login!");
  }

  @Override
  public Patient getPatientByLoggedInEmail() {
    return patientRepository.findByEmail(tokenHelper.getLoggedInUserEmail());
  }

  @Override
  public Patient getPatientByEmail(String email) {
    return patientRepository.findByEmail(email);
  }

  @Override
  public Patient updateExistingPatient(Patient patient) {
    Patient existingPatient = getPatientByLoggedInEmail();
    existingPatient.setAddress(patient.getAddress());
    existingPatient.setPhone(patient.getPhone());
    existingPatient.setBloodGroup(patient.getBloodGroup());
    existingPatient.setSex(patient.getBloodGroup());
    return patientRepository.save(existingPatient);
  }

  @Override
  public TokenInfo signInPatient(User request) {
    Patient patient = getPatientByEmail(request.getEmail());

    if (patient == null) {
      throw new UsernameNotFoundException("Patient not found");
    }

    if (!passwordEncoder.matches(request.getPassword(), patient.getPassword())) {
      throw new UsernameNotFoundException("password is incorrect");
    }

    return new TokenInfo(tokenHelper.createToken(request));
  }
}
