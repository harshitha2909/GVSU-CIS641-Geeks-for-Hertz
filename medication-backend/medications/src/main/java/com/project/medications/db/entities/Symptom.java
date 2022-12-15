package com.project.medications.db.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "symptom")
@Getter
@Setter
public class Symptom implements Serializable {

  @Id
  private Long id;

  @Column(name = "name", nullable = false)
  @NotNull
  private String name;

  @OneToMany(mappedBy="symptom")
  @JsonIgnore
  private Set<SymptomMedicationMap> symptomMedicationMaps;
}