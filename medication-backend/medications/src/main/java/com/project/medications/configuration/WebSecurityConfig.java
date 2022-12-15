package com.project.medications.configuration;

import com.project.medications.security.filters.AuthenticationFilter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  public static final List<String> ORIGINS = Arrays.asList("http://localhost:19006");
  public static final List<String> ALLOWED_METHODS = Arrays.asList("GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH");
  public static final List<String> ALLOWED_HEADERS = Arrays.asList("X-Requested-With", "Origin", "Content-Type", "Accept", "Authorization");
  public static final String[] ALLOWED_REQUESTS = {"/patient/signin", "/patient/signup"};

  private final AuthenticationFilter authFilter;

  @Bean
  public BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
        .authorizeRequests()
        .antMatchers(ALLOWED_REQUESTS).permitAll()
        .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
        .anyRequest().authenticated()
        .and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .cors().configurationSource(corsConfigurationSource())
        .and().csrf().disable();
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration corsConfiguration = new CorsConfiguration();
    corsConfiguration.setAllowedOrigins(ORIGINS);
    corsConfiguration.setAllowedMethods(ALLOWED_METHODS);
    corsConfiguration.setAllowedHeaders(ALLOWED_HEADERS);
    corsConfiguration.setAllowCredentials(true);
    source.registerCorsConfiguration("/**", corsConfiguration);
    return source;
  }
}
