package com.project.medications.pojos;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@RequiredArgsConstructor
public class Error {
  private final HttpStatus status;
  private final String message;
}
