package com.project.medications.db.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "disease_medication_map")
@Getter
@Setter
public class DiseaseMedicationMap implements Serializable {
  @Id
  private Long id;

  @ManyToOne
  @JoinColumn(name="disease", nullable=false)
  private Disease disease;

  @ManyToOne
  @JoinColumn(name="medication", nullable=false)
  private Medication medication;
}