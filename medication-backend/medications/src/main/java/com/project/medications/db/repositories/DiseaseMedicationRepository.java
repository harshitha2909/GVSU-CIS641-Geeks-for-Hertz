package com.project.medications.db.repositories;

import com.project.medications.db.entities.DiseaseMedicationMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiseaseMedicationRepository extends JpaRepository<DiseaseMedicationMap, Long> {
  @Query("select m from DiseaseMedicationMap m where m.disease.name in :diseases")
  List<DiseaseMedicationMap> findByDiseaseNames(@Param("diseases") List<String> diseases);
}
