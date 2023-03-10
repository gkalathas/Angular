package com.example.employeemanagerapp.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name ="first_name")
    private String firstName;
    @Column(name ="last_name")
    private String lastName;
    @Column(name ="email_id")
    private String emailId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "supervisor_ID", referencedColumnName = "id")
    private Supervisor supervisor;


}
