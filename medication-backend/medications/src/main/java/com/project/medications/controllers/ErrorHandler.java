package com.project.medications.controllers;

import com.project.medications.pojos.Error;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ErrorHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(RuntimeException.class)
  public ResponseEntity<Error> handleRuntimeErrors(RuntimeException ex) {
    return new ResponseEntity<>(new Error(
        HttpStatus.BAD_REQUEST,
        ex.getMessage()),
        HttpStatus.BAD_REQUEST);
  }
}

