package com.project.medications.controllers;

import com.project.medications.db.entities.Appointment;
import com.project.medications.pojos.AppointmentDto;
import com.project.medications.services.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("appointment")
@RequiredArgsConstructor
public class AppointmentController {
  private final AppointmentService appointmentService;

  @GetMapping
  public List<Appointment> getAllAppointments() {
    return appointmentService.getAppointments();
  }

  @PostMapping
  public Appointment createAppointment(@RequestBody AppointmentDto appointmentDto) {
    return appointmentService.createAppointment(appointmentDto);
  }
}
