package com.project.medications.security.helpers;

import com.project.medications.pojos.AuthToken;
import com.project.medications.pojos.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.HashMap;

@Component
public class TokenHelper {
  public static final long TIME_FOR_EXPIRY = 10 * 60 * 60 * 1000;
  public static final String JWT_SECRET = "j$wq08klF32ffs";

  public String createToken(User user) {
    return Jwts.builder().setClaims(new HashMap<>()).setSubject(user.getEmail())
        .setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() + TIME_FOR_EXPIRY ))
        .signWith(SignatureAlgorithm.HS512, JWT_SECRET).compact();
  }

  public Boolean isValidToken(String token) {
    return !Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token).getBody().getExpiration().before(new Date());
  }

  public String getTokenSubject(String token) {
    return Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token).getBody().getSubject();
  }

  public String getLoggedInUserEmail() {
    AuthToken token = (AuthToken) SecurityContextHolder.getContext().getAuthentication();
    return (String) token.getPrincipal();
  }
}
