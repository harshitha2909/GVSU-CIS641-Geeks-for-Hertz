package com.project.medications.db.repositories;

import com.project.medications.db.entities.SymptomMedicationMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SymptomMedicationRepository extends JpaRepository<SymptomMedicationMap, Long> {
  @Query("select m from SymptomMedicationMap m where m.symptom.name in :symptoms")
  List<SymptomMedicationMap> findBySymptomNames(@Param("symptoms") List<String> symptoms);
}
