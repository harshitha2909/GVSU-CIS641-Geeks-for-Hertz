package com.project.medications.controllers;

import com.project.medications.services.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.Set;

@RestController
@RequestMapping("search")
@RequiredArgsConstructor
public class SearchController {
  private final SearchService searchService;

  @RequestMapping("/symptom")
  Set<String> getMedicationsFromSymptoms(@RequestParam("symptoms") String symptoms) {
    return searchService.getMedicationsFromSymptoms(symptoms);
  }

  @RequestMapping("/disease")
  Set<String> getMedicationsFromDiseases(@RequestParam("diseases") String diseases) {
    return searchService.getMedicationsFromDiseases(diseases);
  }
}
