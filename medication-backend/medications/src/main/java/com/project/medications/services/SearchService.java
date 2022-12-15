package com.project.medications.services;

import java.util.Set;

public interface SearchService {
  Set<String> getMedicationsFromSymptoms(String symptoms);
  Set<String> getMedicationsFromDiseases(String diseases);
}
