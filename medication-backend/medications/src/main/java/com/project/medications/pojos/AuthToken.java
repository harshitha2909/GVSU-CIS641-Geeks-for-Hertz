package com.project.medications.pojos;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class AuthToken extends AbstractAuthenticationToken {
  private String principal;

  /**
   * Creates a token with the supplied array of authorities.
   *
   * @param authorities the collection of <tt>GrantedAuthority</tt>s for the principal
   *                    represented by this authentication object.
   */
  public AuthToken(Collection<? extends GrantedAuthority> authorities) {
    super(authorities);
  }

  public AuthToken(String principal) {
    super(null);
    this.principal = principal;
  }

  @Override
  public Object getCredentials() {
    return null;
  }

  @Override
  public Object getPrincipal() {
    return principal;
  }
}
