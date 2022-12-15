package com.project.medications.security.filters;

import com.project.medications.pojos.AuthToken;
import com.project.medications.security.helpers.TokenHelper;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.project.medications.pojos.Constants.AUTH_HEADER;
import static com.project.medications.pojos.Constants.BEARER_PREFIX;

@Component
@RequiredArgsConstructor
public class AuthenticationFilter extends OncePerRequestFilter {
  private final TokenHelper tokenHelper;

  @Override
  protected void doFilterInternal(HttpServletRequest request,
                                  HttpServletResponse response,
                                  FilterChain filterChain)
      throws ServletException, IOException {

    String tokenHeader = request.getHeader(AUTH_HEADER);
    if (tokenHeader != null && tokenHeader.startsWith(BEARER_PREFIX)) {
      String token = tokenHeader.substring(7);
      try {
        if (tokenHelper.isValidToken(token)) {
          AuthToken authToken = new AuthToken(tokenHelper.getTokenSubject(token));
          authToken.setAuthenticated(true);
          SecurityContextHolder.getContext().setAuthentication(authToken);
        }
      } catch (IllegalArgumentException | ExpiredJwtException e) {
        logger.error("Invalid jwt token!");
      }
    } else {
      logger.error("No auth header!");
    }
    filterChain.doFilter(request, response);
  }
}
