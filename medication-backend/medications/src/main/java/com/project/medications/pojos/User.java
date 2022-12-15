package com.project.medications.pojos;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class User {
  private final String email;
  private final String password;
}
