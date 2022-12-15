package com.project.medications.services;

import com.project.medications.db.entities.Appointment;
import com.project.medications.db.entities.Doctor;
import com.project.medications.pojos.AppointmentDto;

import java.util.List;

public interface AppointmentService {
   Appointment createAppointment(AppointmentDto appointmentDto);
   List<Appointment> getAppointments();
}
