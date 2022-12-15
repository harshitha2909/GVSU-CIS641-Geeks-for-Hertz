package com.project.medications.db.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "symptom_medication_map")
@Getter
@Setter
public class SymptomMedicationMap implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name="symptom", nullable=false)
  private Symptom symptom;

  @ManyToOne
  @JoinColumn(name="medication", nullable=false)
  private Medication medication;
}