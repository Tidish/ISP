package com.linkomanija.backend.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "genre")
public class Genre {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String pavadinimas;

  public Long getId() {
    return id;
  }
}
