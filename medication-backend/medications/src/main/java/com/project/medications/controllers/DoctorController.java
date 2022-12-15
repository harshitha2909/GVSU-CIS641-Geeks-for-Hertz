package com.project.medications.controllers;

import com.project.medications.db.entities.Appointment;
import com.project.medications.db.entities.Doctor;
import com.project.medications.pojos.AppointmentDto;
import com.project.medications.services.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("doctor")
@RequiredArgsConstructor
public class DoctorController {
  private final DoctorService doctorService;

  @GetMapping("/name")
  public List<Doctor> findDoctorsByName(@RequestParam("val") String val) {
    return doctorService.findDoctorsByName(val);
  }

  @GetMapping("/specialization")
  public List<Doctor> findDoctorsBySpecialization(@RequestParam("val") String val) {
    return doctorService.findDoctorsBySpecialization(val);
  }
}
