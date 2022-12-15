package com.project.medications.services.impl;

import com.project.medications.db.entities.Appointment;
import com.project.medications.db.entities.Doctor;
import com.project.medications.db.entities.Patient;
import com.project.medications.db.repositories.AppointmentsRepository;
import com.project.medications.db.repositories.DoctorRepository;
import com.project.medications.pojos.AppointmentDto;
import com.project.medications.services.AppointmentService;
import com.project.medications.services.DoctorService;
import com.project.medications.services.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {
  private final DoctorRepository doctorRepository;
  private final AppointmentsRepository appointmentsRepository;
  private final PatientService patientService;

  @Override
  public Appointment createAppointment(AppointmentDto appointmentDto) {
    if (appointmentDto.getAppointmentDate().before(new Date())) {
      throw new RuntimeException("Time can't be in the past");
    }

    // Check if doctor already have appointments between the asked time and one hour after
    List<Appointment> appointments =  appointmentsRepository.
        findByDoctorIdAndDateLessThanEqualAndDateGreaterThanEqual(
            appointmentDto.getDoctorId(),
            new Date(appointmentDto.getAppointmentDate().getTime() + 3600 * 1000),
            appointmentDto.getAppointmentDate());

    if (appointments.size() > 0) {
      throw new RuntimeException("Doctor already has appointment, try other time");
    }

    // Check if patient already have appointments between the asked time and one hour after
    Patient patient = patientService.getPatientByLoggedInEmail();
    appointments =  appointmentsRepository.
        findByPatientIdAndDateLessThanEqualAndDateGreaterThanEqual(
            patient.getId(),
            new Date(appointmentDto.getAppointmentDate().getTime() + 3600 * 1000),
            appointmentDto.getAppointmentDate());

    if (appointments.size() > 0) {
      throw new RuntimeException("You already have appointment, try other time");
    }

    Appointment appointment = new Appointment();
    appointment.setDate(appointmentDto.getAppointmentDate());
    appointment.setPatient(patient);
    appointment.setDoctor(doctorRepository.getById(appointmentDto.getDoctorId()));
    return appointmentsRepository.save(appointment);
  }

  @Override
  public List<Appointment> getAppointments() {
    return appointmentsRepository.findByPatientId(patientService.getPatientByLoggedInEmail().getId());
  }
}
