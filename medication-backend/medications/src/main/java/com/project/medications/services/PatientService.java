package com.project.medications.services;

import com.project.medications.configuration.TokenInfo;
import com.project.medications.db.entities.Patient;
import com.project.medications.pojos.User;

public interface PatientService {
  public TokenInfo signInPatient(User request);
  public TokenInfo createNewPatient(Patient user);
  public Patient getPatientByLoggedInEmail();
  public Patient getPatientByEmail(String email);
  public Patient updateExistingPatient(Patient patient);
}
