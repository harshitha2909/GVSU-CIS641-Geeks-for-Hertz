package com.project.medications.db.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "patients")
@Getter
@Setter
public class Patient {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "name", nullable = false, length = 128)
  private String name;

  @Column(nullable = false, unique = true, length = 45)
  private String email;

  @Column(nullable = false, length = 64)
  private String password;

  @Column(name="sex", length = 10)
  private String sex;

  @Column(name="blood_group", length = 10)
  private String bloodGroup;

  @Column(name = "phone", length = 10)
  private String phone;

  @Column(name = "address", length = 128)
  private String address;

  @OneToMany(mappedBy="patient")
  @JsonIgnore
  private Set<Appointment> appointments;
}
