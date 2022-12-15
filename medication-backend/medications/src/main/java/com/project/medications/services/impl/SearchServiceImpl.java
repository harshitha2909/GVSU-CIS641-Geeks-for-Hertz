package com.project.medications.services.impl;

import com.project.medications.db.entities.DiseaseMedicationMap;
import com.project.medications.db.entities.SymptomMedicationMap;
import com.project.medications.db.repositories.DiseaseMedicationRepository;
import com.project.medications.db.repositories.SymptomMedicationRepository;
import com.project.medications.services.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {
  private final DiseaseMedicationRepository diseaseMedicationRepository;
  private final SymptomMedicationRepository symptomMedicationRepository;

  @Override
  public Set<String> getMedicationsFromSymptoms(String symptoms) {
    List<String> symptomsList = Arrays.asList(symptoms.toLowerCase(Locale.ROOT).split("\\s*,\\s*"));
    Set<String> medications = new LinkedHashSet<>();

    if (symptomsList.size() > 0) {
      List<SymptomMedicationMap> diseaseMedicationMaps =
          symptomMedicationRepository.findBySymptomNames(symptomsList);
      for (SymptomMedicationMap map: diseaseMedicationMaps) {
        medications.add(map.getMedication().getName());
      }
    }
    return medications;
  }

  @Override
  public Set<String> getMedicationsFromDiseases(String diseases) {
    List<String> diseasesList = Arrays.asList(diseases.toLowerCase(Locale.ROOT).split("\\s*,\\s*"));
    Set<String> medications = new LinkedHashSet<>();

    if (diseasesList.size() > 0) {
      List<DiseaseMedicationMap> diseaseMedicationMaps =
          diseaseMedicationRepository.findByDiseaseNames(diseasesList);
      for (DiseaseMedicationMap map: diseaseMedicationMaps) {
        medications.add(map.getMedication().getName());
      }
    }
    return medications;
  }
}
