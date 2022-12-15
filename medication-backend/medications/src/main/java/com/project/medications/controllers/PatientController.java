package com.project.medications.controllers;

import com.project.medications.configuration.TokenInfo;
import com.project.medications.db.entities.Patient;
import com.project.medications.pojos.User;
import com.project.medications.services.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("patient")
@RequiredArgsConstructor
public class PatientController {
  private final PatientService patientService;

  @PostMapping("/signup")
  public TokenInfo createNewPatient(@RequestBody Patient patient) {
    return patientService.createNewPatient(patient);
  }

  @PostMapping("/signin")
  public TokenInfo signInPatient(@RequestBody User user) {
    return patientService.signInPatient(user);
  }

  @PostMapping("/update")
  public Patient updateUser(@RequestBody Patient patient) {
    return patientService.updateExistingPatient(patient);
  }

  @GetMapping
  public Patient getPatientInfo() {
    return patientService.getPatientByLoggedInEmail();
  }
}